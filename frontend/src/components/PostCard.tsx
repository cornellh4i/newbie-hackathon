
import Card from '@mui/material/Card'; import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Avatar, Box, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { blue } from '@mui/material/colors';
import CommentIcon from '@mui/icons-material/Comment';
import CardHeader from '@mui/material/CardHeader';


const PostCard = ({ username, title, question, course, rank, comments }:
  { username: string, title: string, question: string, course: string, rank: number, comments: string[] }) => {
  return (
    <Box display="flex" sx={{ justifyContent: "center" }} border={10} borderColor="transparent">
      <Card sx={{ maxWidth: 800 }}>

        <CardContent>
          {
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="user"></Avatar>
          }
          <Box display="flex" sx={{ justifyContent: "left" }} borderColor="transparent" paddingTop={1}>
            {username} r/{course}
          </Box>
          <CardActions sx={{ justifyContent: "right" }}>
            <IconButton aria-label="votes">
              <ArrowUpwardIcon />
              <Box paddingLeft={1} paddingRight={1} >
                <Typography color="black">
                  {rank}
                </Typography>
              </Box>
              <ArrowDownwardIcon />
            </IconButton>
          </CardActions>
          <Box display="flex" paddingLeft={2.5} paddingBottom={0.5}>
            <Typography variant="body1" align='left'>
              {title}
            </Typography>
          </Box>
          <Box display="flex" paddingLeft={2.5}>
            <Typography variant="body2" color="text.secondary" align='left'>
              {question}
            </Typography>
          </Box>
          <CardActions sx={{ justifyContent: "left" }}>
            <IconButton aria-label="comment">
              <CommentIcon />
              <Box paddingLeft={1} paddingRight={1} >
                <Typography >
                  {comments.length} comments
                </Typography>
              </Box>
            </IconButton>
          </CardActions>
        </CardContent>


      </Card>
    </Box>
  );
}
export default PostCard
