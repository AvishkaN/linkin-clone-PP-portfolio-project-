import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';    
import Main from './Components/Main';    
import Wrapper from './Layout/wrapper';    

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './Components/redux/userSlice';
import Login from './Components/Login';
import styled from 'styled-components';
import { selectClick } from './Components/redux/clickSlice';



function App() {
  
  const user=useSelector(selectUser);
  const clicks=useSelector(selectClick);
  

  return (
    <div className="App">

        {user  && (<Header/>)}
        {user ? (<Main/>): (<Login/>)}


      <Wrapper on={clicks.openOverlay} />




    </div>
  );
}


const DIV=styled.div`  

 
`;    



export default App;
