import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header';    
import Main from './Components/Main';    
import Wrapper from './Layout/wrapper';  
import SinglePost from './pages/singlePost';  

import './App.css';

import LoginPage from './pages/loginPage';    
import RegisterPage from './pages/registerPage';
import RedirectPage from './pages/redirectionPage';


import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './Components/redux/userSlice';
import { selectClick } from './Components/redux/clickSlice';




function App() {
  
  const user=useSelector(selectUser);
  const clicks=useSelector(selectClick);
  const history=useHistory();
  
  

  return (
    <div className="App">
      <Router>

          <Switch>

                <Route path="/login" exact>
                  <LoginPage/>
                </Route>

                <Route path="/register" exact>
                   {!user &&<RegisterPage/>}
                </Route>

                <Route path="/posts" exact>
                   {<SinglePost/>}
                </Route>

                <Route path="/" exact>
                      {user  && (<Header/>)}
                      {user ? (<Main/>): (<RedirectPage/>)}

                      <Wrapper on={clicks.openOverlay} />
                </Route>

                <Route>
                   <p>noo</p>
                </Route>


         

          </Switch>
      </Router>


    </div>
  );
}


const DIV=styled.div`  

 
`;    



export default App;
