import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Logo from '../assets/login-logo.svg';

import firebase from "firebase/app";

import { login } from '../Components/redux/userSlice';
import { Link } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();

    

    const loginHandler=(e)=>{


        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {

            dispatch(
                login({
                    email:userCredential.user.email,
                    uid:userCredential.user.uid,
                    displayName:userCredential.user.displayName,
                    photoUrl:userCredential.user.photoURL,
                })
            )
        })
        .catch(error => {
            alert(error.message);
        });
    };


    return (
        <DIV>
            <form action="">
            <div className="image">
                <img src={Logo} alt="" />
            </div>
                <input type="text"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" onClick={loginHandler}>Log in</button>
                <p href="" className="register-in-text">you haven't account <Link to="/register">register</Link></p>

            </form>
        </DIV>
    )
}

const DIV=styled.div`
        width: 100%;
        
        form{  
            width: 70%;
            margin: 50px auto;
            display: flex;
            flex-direction: column; 
            
            .image{
                text-align: center; 
                img{
                    height: 100%;
                    width: 200px; 
                }
            }
  
            

            input{
                background: transparent; 
                padding:12px; 
                margin-top: 35px;   

                &:focus{
                    outline: none; 
                }
            }

            button{
                background: #346edf;
                padding : 8px;    
                cursor: pointer;
                border: none;   
                margin-top: 35px;   
                color: #fff;  

            }

            a{
                text-decoration: none;
                color: inherit;
                text-align:center;  
                margin-top: 35px;   


                .txt{
                    color:#4a63c7;
                    font-weight: bold;  
                }
            }

            .register-in-text{ 
                margin-top:20px;      
                text-align:center;

                a{
                    text-decoration: none;
                    color: #346edf;
                    font-weight:bold; 
                }
            }
        }
`;

export default Login;
