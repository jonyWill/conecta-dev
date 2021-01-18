import React , {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
import api from '../../api';



const useStyle = makeStyles((theme)=>({
  root:{
    marginBottom: theme.spacing(2)
  },
  subheader:{
    display: 'flex',
    alignItems: 'center'
  },
  caption:{
    marginRight: theme.spacing(1)
  },
  message:{
    height: 'auto',
    marginBottom: theme.spacing(2),
    padding:  '0 10px'
  },
  image:{
    height: 300,
    width: '100%',
    maxWidth: '100%'
  },
  content: {
    padding: 5
  },
  favorite:{
    marginLeft: 'auto'
  },
  like:{
    marginRight:theme.spacing(0.5)
  },
  reactions:{
    marginRight:theme.spacing(0.5)
  }

}));
const PostCard = ({post})=>{
  const apiPost = api();

  const [like, setLike] = useState(post.like);

  const plusLike = async()=>{
    setLike(like + 1);
    const res = await apiPost.plusLike(post._id);
    setLike(res);
  };

 

  const classes = useStyle();
  return (
    <Card className={classes.root}>

      <CardHeader
        avatar={<Avatar src={post.avatar}/>}
        title={<Typography variant='h6'>{post.titulo}</Typography>}
        subheader={

          <div className={classes.subheader}>

            <Typography variant='caption' className={classes.caption}>
              {'Avaliado por:'}
            </Typography>

            <Typography variant='subtitle2' className={classes.caption}>
              {post.autor}
            </Typography>

          </div>

        }

      />

      <CardContent className={classes.content}>

        <Typography 

          variant='body1' 
          className={classes.message}>
            {post.descricao}

        </Typography>
        <CardActionArea>
          <img className={classes.image} src={post.urlPost}/>
        </CardActionArea>

      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='like'  onClick={plusLike}>
          <FavoriteIcon className={classes.like} color="primary"/>
            <Typography
              style={{cursor: 'pointer'}}
              color="textSecondary"
              variant='body2'
            >
              {like}
            </Typography>
          
        </IconButton>

        <IconButton aria-label='comment'>
          <MessageIcon  className={classes.reactions} color="secondary" />
            <Typography
              style={{cursor: 'pointer'}}
              color="textSecondary"
              variant='body2'
            >
              {'30'}
            </Typography>
          
        </IconButton>

        <IconButton aria-label='favorite' className={classes.favorite}>
          <BookmarkIcon />
        </IconButton>

      </CardActions>
    </Card>
  );
}
export default PostCard;

