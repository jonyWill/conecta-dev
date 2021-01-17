import React, {useState, useEffect}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../componentes/Postcard';

import api from '../../../api';

const apiPost = api();
const useStyle = makeStyles((theme) =>({
  root:{

  }
}));


const Feed = ()=>{
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const getPosts = async()=>{
      const json = await apiPost.postAll('/post');
      console.log(json);
      setPosts(json);
    }
    getPosts();
  },[]);

  

  const classes = useStyle();
  return(
    <div>
      {
        posts.map( (item,key) =>(
          <PostCard key={item._id} post={item} />
        ))
      }
    </div>
  );
}
export default Feed;