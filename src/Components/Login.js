import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Logo from '../assets/login-logo.svg';

// import {getAuth} from "firebase/auth";
// import {createUserWithEmailAndPassword,getAuth} from "./Firebase";
import firebase from "firebase/app";

import { login } from './redux/userSlice';

function Login() {
    const [fullname,setFullName]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();

    
    const register=(e)=>{

        e.preventDefault();

        // console.log(1);
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            console.log(2);
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
            })
        }).catch(err=>alert(err.message))

      

      
    };

    const loginHandler=(e)=>{

        console.log('$$$$$$$$$');

        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log(userCredential.user);

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
                
                <input type="text"  placeholder="full name (required if registering)"  value={fullname} onChange={(e)=>setFullName(e.target.value)}/>
                <input type="text"  placeholder="Profile pic URL (optional)" value={profilePic} onChange={(e)=>setProfilePic(e.target.value)}/>
                <input type="text"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" onClick={loginHandler}>Log in</button>
                <a href="" onClick={register}>Not a member? <span className="txt">Register</span></a>
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
        }
`;

export default Login;
