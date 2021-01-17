import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Bell} from 'react-feather'; 
import Avatar from '@material-ui/core/Avatar';

const  useStyles = makeStyles({
  appbar:{
    boxShadow:'none'
  },
  img:{
    maxHeight: 55
  },
  grow:{
    flexGrow:1
  },
  userSection:{
    display:'flex',
    alignItems: 'center'
  },
  button:{
    marginRight: 10
  },
  bell:{
    marginRight: 10
  }
  
});
const Header = ()=>{
  const classes = useStyles();
  return(
    <AppBar position="fixed" color="inherit" className={classes.appbar} >
      <Toolbar>
        <img src="/images/logo.png" alt="logo" className={classes.img} />
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button className={classes.button} color="primary" variant="contained">Novo Post</Button>
          <SvgIcon className={classes.bell}>
            <Bell />
          </SvgIcon>
          <Avatar alt="Remy Sharp" src="https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-crianca_18591-50926.jpg" />
        </div>
  
      </Toolbar>
    </AppBar>
  );
}
export default Header;