import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
    <Link style={{ textDecoration: 'none' }} href={url}>
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
