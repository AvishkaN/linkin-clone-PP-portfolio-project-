import React from 'react'
import styled from 'styled-components';
import {Avatar} from '@mui/material';

import Like from '@mui/icons-material/ThumbUpSharp';
import Menu from '@mui/icons-material/MoreVert';
import Comment from '@mui/icons-material/Comment';
import Share from '@mui/icons-material/Share';
import Send from '@mui/icons-material/Send';
import PostInput from './PostEdit';


import { useDispatch, useSelector } from 'react-redux';
import { openOverlayFN, selectClick } from './redux/clickSlice';

import PostMenu from './../Components/PostMenu';


const GenarateButton=(Icon,Text)=>{
    return(
        <div className="btn">
            <Icon className="icon"/>
            <p>{Text}</p>
        </div>
    );
};


function POST({name,time="2021/11/13",message,id}) {
    const dispatch=useDispatch();
    const clicks=useSelector(selectClick);


    const openOverlay=()=>{
        dispatch(openOverlayFN(id));
        
    };

    return (   

     
        <DIV>
            <div className="wrapper">
                <div className="top">
                    <Avatar className="avatar">{name[0]}</Avatar>
                    <div className="name-date-container">

                        <div className="name-date">
                            <h2>{name}</h2>
                            <p>{time}</p>
                        </div>

                        <Menu className="menu-icon iconI" onClick={openOverlay}/>
                    </div>
                </div>

                {clicks.clickedPostId==id && clicks.openMessage && <PostMenu id={id}/>}

                <div className="center">
                        <p>{message} </p>
                </div>
                <div className="bottom">
                  {GenarateButton(Like,"Like")}
                  {GenarateButton(Comment,"Comment")}
                  {GenarateButton(Share,"Share")}
                  {GenarateButton(Send,"Send")}
                </div>
            

            </div>
            {clicks.clickedPostId==id && clicks.showPostEditor && (<PostInput message={message} id={id}/>)}
              
        </DIV>
    )
}


const DIV=styled.div`   
   background: #fff; 
   margin: 10px auto;
    width: 95%;  
    padding-top:30px;
    padding-bottom:30px;
    border-radius: 15px;
    position: relative;

     .wrapper{
        margin: 0px auto;
         width: 90%;  
         .top{
             display: flex;
             padding-top:7px;
            padding-bottom:7px;

            .avatar{
                background: red; 
            }

            .name-date-container{
                padding-left:15px;  
                display: flex;   
                width: 100%;
                justify-content: space-between;

                .name-date{
                    h3{
                        
                    }
                    p{
                        color: grey; 
                        font-size: 16px;   
                    }
                }

                .menu-icon{
                    padding: 5px;
                    box-sizing:content-box;
                    &:hover{
                        background: #b1b1b12e; 
                        border-radius:20px;   

                    }
                }
            



            }
         }

         .post-Menu-cointainer{
            width: 100%;
            display: flex;
            justify-content: end; 

         }
         .center{

            padding-top:7px;
            padding-bottom:7px;
         }
         .bottom{
             display: flex;
             justify-content: space-between;
             padding-top:7px;
            padding-bottom:7px;
            .btn{
                display: flex;
                align-items: center;  
                cursor: pointer; 
                font-size: 19px;
                
                &:hover .icon{
                    color: #2792e3;
                }

                .icon{

                    font-size: inherit;
                    color: inherit;
                }
                p{
                    padding-left: 5px;  
                    font-size: inherit;
                }
            }
         }
     }
`;      


export default POST;
