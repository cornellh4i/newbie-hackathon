
import Card from '@mui/material/Card'; import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Avatar, Box, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { blue } from '@mui/material/colors';
import CommentIcon from '@mui/icons-material/Comment';
import postRouter from '../../../backend/src/posts/views';
import { useEffect, useState } from 'react';
import Post, { type IPost } from '../../../backend/src/posts/models';


const PostCards = () => {
  const [postCards, setPosts] = useState([]);

  useEffect(() => {
    const get_all_posts = async () => {
      const baseURL = `http://localhost:8000/posts/all`
      try {
        const response = await fetch(baseURL, { method: "GET" })
        const all_posts = await response.json()
        setPosts(all_posts);
      }
      catch (err) {
        throw new Error(`Unknown Error`)
      }
    }
  }, []);

  return (
    <>
      {
        postCards.map((PostCard: IPost) => (
          <Box display="flex" sx={{ justifyContent: "center" }} border={10} borderColor="transparent">
            <Card sx={{ maxWidth: 800 }}>

              <CardContent>
                {
                  <Avatar sx={{ bgcolor: blue[500] }} aria-label="user"></Avatar>
                }
                <Box display="flex" sx={{ justifyContent: "left" }} borderColor="transparent" paddingTop={1}>
                  {PostCard.id}
                </Box>
                <CardActions sx={{ justifyContent: "right" }}>
                  <IconButton aria-label="votes">
                    <ArrowUpwardIcon />
                    <Box paddingLeft={1} paddingRight={1} >
                      <Typography color="black">
                        {PostCard.upvotes}
                      </Typography>
                    </Box>
                    <ArrowDownwardIcon />
                  </IconButton>
                </CardActions>
                <Box display="flex" paddingLeft={2.5} paddingBottom={0.5}>
                  <Typography variant="body1" align='left'>
                    {PostCard.title}
                  </Typography>
                </Box>
                <Box display="flex" paddingLeft={2.5}>
                  <Typography variant="body2" color="text.secondary" align='left'>
                    {PostCard.postText}
                  </Typography>
                </Box>
                <CardActions sx={{ justifyContent: "left" }}>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                    <Box paddingLeft={1} paddingRight={1} >
                      <Typography >
                        {PostCard.comments.length} comments
                      </Typography>
                    </Box>
                  </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          </Box>
        ))
      }
    </>
  );
}

export default PostCards
