import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Avatar, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { blue } from '@mui/material/colors';
import CommentIcon from '@mui/icons-material/Comment';
import postRouter from '../../../backend/src/posts/views';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  postCards: {
    title: string;
    postText: string;
    comments: never[];
    upvotes: number;
    course: string;
}[]
}


const PostCards = ({ postCards }: Props) => {

  const navigate = useNavigate();

  const handleComment = async () => {
    navigate('/comments');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      {postCards.slice().reverse().map((PostCard, index) => (
        <Card key={index} sx={{ width: '100%', maxWidth: 800, marginBottom: 3, boxShadow: 4, borderRadius: '20px' }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography variant="h5" align='left' sx={{ paddingLeft: "15px", paddingTop: "7px" }}>
                {PostCard.title}
              </Typography>
              <div style={{ marginLeft: 'auto' }}>
                <CardActions sx={{ justifyContent: "right" }}>
                  <IconButton aria-label="votes">
                    <ArrowUpwardIcon />
                    <Box paddingLeft={1} paddingRight={1}>
                      <Typography color="black">
                        {PostCard.upvotes}
                      </Typography>
                    </Box>
                    <ArrowDownwardIcon />
                  </IconButton>
                </CardActions>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: "25px", marginTop: "-10px" }}>
              <Avatar sx={{ bgcolor: blue[500], width: 24, height: 24 }} aria-label="user"></Avatar>
              <Box display="flex" sx={{ justifyContent: "left", paddingLeft: "5px", paddingTop: "2px", marginBottom: "5px", marginRight: '10px' }}>
                {"Anon"}
              </Box>
              <Typography variant="body1" align='left'>
                {"r/" + PostCard.course}
              </Typography>
            </div>

            <div style={{ paddingTop: "10px" }}>
              <Box display="flex" paddingLeft={2.5}>
                <Typography variant="body1" align='left'>
                  {PostCard.postText}
                </Typography>
              </Box>
            </div>
            <CardActions sx={{ justifyContent: "left" }}>
              <IconButton aria-label="comment" onClick={handleComment}>
                <CommentIcon />
                <Box paddingLeft={1} paddingRight={1}>
                  <Typography>
                    {PostCard.comments.length} comments
                  </Typography>
                </Box>
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default PostCards;
