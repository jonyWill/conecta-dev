import React from 'react';
import  {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
  root:{
    display: 'flex',
    flexDirection: 'row',
    height: '100vh'
  },

  left:{
    background: 'blue',
    flexBasis: '58%',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },
  right:{
    background: 'green',
    flexBasis: '42%',
  },
  form:{
    display:'flex',
    flexDirection:'column',
    margin:'64px 32px',
    alignItems: 'center'
  }


}));


const Login =()=>{
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <div className={classes.left}>
        <Typography style={{color: '#fff', fontSize: '30px', lineHeight: '45px'}}>
          <strong>Simplificando a forma de conectar desenvolvedores de software</strong>
        </Typography>
        <Typography style={{color: '#fff', fontSize: '15px', lineHeight: '45px'}}>
          Compartilhando seu conhecimento com toda nossa rede de desenvolvedores de software
        </Typography>
      </div>
      <div className={classes.right}>
        <form className={classes.form}>
          <h4>Acesso</h4>
          <input  type="text"/>
          <input  type="text"/>
        </form>
      </div>
    </div>
  );
}
export default Login;