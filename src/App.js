import  React from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import {ThemeProvider} from '@material-ui/core/styles';
import  theme from './theme';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
