import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

const useStyle = makeStyles((theme)=>({
  root:{
    padding: theme.spacing(2),
    width:275,
    marginRight:theme.spacing(2)
  },
  button:{
    width:'100%'
  }

}));

const tags = [
  {id : 1 , name: 'html'},
  {id : 2 , name: 'reactjs'},
  {id : 3 , name: 'javascript'},
  {id : 4 , name: 'php'},
  {id : 5 , name: 'java'},
  {id : 6 , name: 'json'}
];
const NavBar = ()=>{
  const classes = useStyle();
  return(
    <div>
    <Paper className={classes.root}>
      <Button className={classes.button} variant='outlined' color='secondary'>Registrar Grátis</Button>
      <ListSubheader component="div" id="nested-list-subheader">
        Tags em Alta
      </ListSubheader>
      {tags.map((itens,key)=>(
        <ListItem dense button key={key}>
          <ListItemText>{`# ${itens.name}`}</ListItemText>
        </ListItem>
        ))
      }
      <ListItem button>
        Exibir mais Itens
      </ListItem>
    </Paper>
    </div>
  );
}
export default NavBar;


