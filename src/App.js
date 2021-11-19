import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';    
import Main from './Components/Main';    

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './Components/redux/userSlice';
import Login from './Components/Login';



function App() {
  const user=useSelector(selectUser);
  console.log(user);
  return (
    <div className="App">

      {console.log('renDERR')}
        {user  && (<Header/>)}
        {user ? (<Main/>): (<Login/>)}



    </div>
  );
}

export default App;
