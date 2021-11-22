import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InputButton from '../Components/inputButton';
// import { collection, addDoc ,FieldValue,getDocs} from "firebase/firestore"; 
import {db} from "./Firebase"; 
import firebase from 'firebase';

import Edit from '@mui/icons-material/Edit';
import Video from '@mui/icons-material/Subscriptions';
import Photo from '@mui/icons-material/Photo';
import Event from '@mui/icons-material/Event';
import WriteArticle from '@mui/icons-material/CalendarViewDay';

import {selectUser} from './redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AddPost, selectPosts } from './redux/postSlice';
import LoadingCir from './LoadingSpinner';



function PostInput() {  

        const [inputVal, setinputVal] = useState("");
        const dispatch=useDispatch();
        const user=useSelector(selectUser);
        const post=useSelector(selectPosts);


    const handleAddPost=async (e)=>{
        e.preventDefault();
    
        await AddPost(dispatch,inputVal,user,post);

        setinputVal("");
            

    
    }


    return (   
        <DIV>
           <div className="wrapper">
               <div className="input-container">
                   <form action="" onSubmit={handleAddPost}>
                        <Edit className="edit"/>
                        <input type="text" className="input" value={inputVal} onChange={(e)=>setinputVal(e.target.value)}/>
                        {post.postInputLoading  && <LoadingCir  color={""} width="20px" height="20px" margin="0px" padding="0px" marginRight="8px"  marginTop="3px" /> }

                   </form>
               </div>

               <div className="buttons__container">
                    <InputButton
                        Text="Photo"
                        Icon={Photo}
                        color="blue"
                    />
                    <InputButton
                        Text="VIdeo"
                        Icon={Video}
                        color="pink"
                    />
                    <InputButton
                        Text="Event"
                        Icon={Event}
                        color="gray"
                    />
                    <InputButton
                        Text="Write article"
                        Icon={WriteArticle}
                        color="green"
                    />
               </div>
           </div>
        </DIV>
    )
}


const DIV=styled.div`   
   background: #fff; 
   margin: 0px auto;
    width: 95%;  
    padding-top: 25px; 
    padding-bottom: 10px; 
    border-radius: 15px; 
    
    .wrapper{
        margin: 0px auto;
         width: 90%;  
        display: flex;
        flex-direction: column;
        .input-container{
            form{      
                display: flex;
                border:1px solid #000;
                border-radius: 20px;
                .edit{
                    margin-left: 18px;
                    color:grey; 
                }
    
                input{   
                    width: 90%;  
                }
                .loadSpinner{
                    background: red !important; 

                    .load {
                        width: 100px;
                        height: 100px;
                        margin: 110px auto 0;
                        border:solid 10px green !important;
                    }
                }
            }

        }

        .buttons__container{
            display: flex;   
            justify-content: space-evenly;
            align-items: center; 
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
`;      


export default PostInput;
