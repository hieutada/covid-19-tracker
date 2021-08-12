import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    height: '100%',
  },
  media: {
    height: '200px',
  },
});

export default function NewsCard({ url, title, lead, thumbnail, timeAgo }) {
  const classes = useStyles();

  return (
    <Link style={{ textDecoration: 'none' }} href={url} target='_blank'> 
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={thumbnail}
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='h2'>
              {title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {lead}
            </Typography>

            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              style={{ marginTop: '8px' }}
            >
              VnExpres - {timeAgo} trước
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
