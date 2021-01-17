import React from 'react';
//import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import  Container from '@material-ui/core/Container';
import  Box  from '@material-ui/core/Box';

import Header from './componentes/header';
import Feed from './componentes/feed';
import NavBar from './componentes/navbar';


const useStyles = makeStyles({
  root:{
    display:'flex',
    flexDirection: 'column'

  },
  main:{
    height: '100vh',
    padding:24

  },
  toolbar:{
    minHeight:60
  }
});
const Home = ()=>{
  const classes = useStyles();
  return(

    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}>

      </div>
      <main className={classes.main}>
        <Container maxWidth="lg">
          <Box display="flex">
            <NavBar />
            <Feed />
          </Box>
        </Container>
      </main>
    </div>

  );

}

export default Home;