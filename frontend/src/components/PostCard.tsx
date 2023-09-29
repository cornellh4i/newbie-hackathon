import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Avatar, Box, Button, SvgIcon, TextField, Toolbar } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { blue } from '@mui/material/colors';
import CommentIcon from '@mui/icons-material/Comment';

export default function PostCard() {


  return (
    <Box display="flex" sx={{ justifyContent: "center" }} border={10} borderColor="transparent">
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          {
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="user"></Avatar>
          }
          <Box display="flex" sx={{ justifyContent: "left" }} borderColor="transparent" paddingTop={1}>
            Username r/CS1110
          </Box>
          <CardActions sx={{ justifyContent: "right" }}>
            <IconButton aria-label="upvote">
              <ArrowUpwardIcon />
            </IconButton>
            <IconButton aria-label="downvote">
              <ArrowDownwardIcon />
            </IconButton>
          </CardActions>
          <Typography variant="body1">
            Lab 5 Question

          </Typography>
          <Typography variant="body2" color="text.secondary">
            For the layout 2 of lab 5, is it okay if the orange h1 element changes
            width as you change the screen size? Or does it have to be fixed as
            shown in the video?
          </Typography>
          <CardActions sx={{ justifyContent: "left" }}>
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          </CardActions>
        </CardContent>


      </Card>
    </Box>
  );
}