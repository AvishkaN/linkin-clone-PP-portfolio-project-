import React from 'react'
import styled from 'styled-components';
import {Avatar} from '@mui/material';

import Like from '@mui/icons-material/ThumbUpSharp';
import Comment from '@mui/icons-material/Comment';
import Share from '@mui/icons-material/Share';
import Send from '@mui/icons-material/Send';

const GenarateButton=(Icon,Text)=>{
    return(
        <div className="btn">
            <Icon className="icon"/>
            <p>{Text}</p>
        </div>
    );
};


function POST({name,time="2021/11/13",message}) {
    return (   

     
        <DIV>
            <div className="wrapper">
                <div className="top">
                    <Avatar className="avatar">{name[0]}</Avatar>
                    <div className="name-date-container">
                        <h2>{name}</h2>
                        <p>{time}</p>
                    </div>
                </div>
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
                h3{
                    
                }
                p{
                    color: grey; 
                    font-size: 16px;   
                }
            }
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
