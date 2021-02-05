import logo from './logo.svg';
import './App.css';
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import {useContext} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import AuthState from './context/acronym/acronymState'
import Home from './components/Home'
import Login from './components/auth/Login.jsx'
import Dashboard from './components/dash/dashboard'
import 'antd/dist/antd.css';

function App(props) {
  return (
    
    <BrowserRouter>
    <Switch>
  <AuthState>
  <Route exact path='/' render={()=><Home/>}></Route>
  <Route exact path='/login' render={()=><Login/>}></Route>
  <Route exact path='/dash' render={()=><Dashboard/>}></Route>
  </AuthState>
  </Switch>
    </BrowserRouter>
 
  );
}

export default App;
