import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Logo from '../assets/login-logo.svg';

// import {getAuth} from "firebase/auth";
// import {createUserWithEmailAndPassword,getAuth} from "./Firebase";
import firebase from "firebase/app";

import { login } from '../Components/redux/userSlice';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
    const [fullname,setFullName]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    const history=useHistory();

    
    const register=(e)=>{

        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:fullname,
                photoUrl:profilePic
            })
            .then(()=>{
                dispatch(
                    login({ 
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:fullname,
                        photoUrl:profilePic,
                    })
                )   
                history.push("/");
            })
        }).catch(err=>alert(err.message))

      

      
    };



    return (
        <DIV>
            <form action="">
            <div className="image">
                <img src={Logo} alt="" />
            </div>
                
                <input type="text"  placeholder="full name (required if registering)"  value={fullname} onChange={(e)=>setFullName(e.target.value)}/>
                <input type="text"  placeholder="Profile pic URL (optional)" value={profilePic} onChange={(e)=>setProfilePic(e.target.value)}/>
                <input type="text"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <a href="" className="a" onClick={register}>Register</a>
                <p href="" className="logged-in-text">you are alredy logged in? <Link to="/login">log in</Link></p>
            </form>
        </DIV>
    )
}

const DIV=styled.div`
        width: 100%;
        
        form{  
            
            .image{
                text-align: center; 
                img{
                    height: 100%;
                    width: 200px; 
                }
            }
            width: 70%;
            margin: 50px auto;
            display: flex;
            flex-direction: column; 
            

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

            .a{
                text-decoration: none;
                color: inherit;
                text-align:center;  
                margin-top: 35px;   
                background:#346edf;
                color:#fff;
                padding: 6px;

                
            }

            .logged-in-text{ 
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
