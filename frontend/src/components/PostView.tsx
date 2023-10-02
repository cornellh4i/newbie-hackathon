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

const PostView = ({ username, title, question, course, rank }: {
  username: string;
  title: string;
  question: string;
  course: string;
  rank: number;
}) => {
  return (
    <Box display="flex" justifyContent="center" border={10} borderColor="transparent">
      <Card sx={{ width: 600, maxWidth: '100%' }}>
        <CardContent>
          <Typography variant="h4" align='left' marginBottom={1}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='left' marginBottom={1}>
            from {username} in {course}
          </Typography>
          <Typography variant="body1" color="text.secondary" align='left'>
            {question}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "right" }}>
          <Box display="flex" alignItems="center">
            <IconButton aria-label="votes">
              <ArrowUpwardIcon />
              <Box paddingLeft={1} paddingRight={1}>
                <Typography color="black">
                  {rank}
                </Typography>
              </Box>
              <ArrowDownwardIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PostView;
