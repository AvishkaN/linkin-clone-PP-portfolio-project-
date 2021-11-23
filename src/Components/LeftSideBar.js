import React from 'react'
import styled from 'styled-components';
import Hashtag from './Hashtags';
import {Avatar} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser} from './redux/userSlice';

function LeftSideBar({className}) {
    const user=useSelector(selectUser);

    return (   
        <DIV className={className && className}>
           <div className="name-card">
               <div className="top">
                   <div className="background"></div>
                   <div className="avatar">
                        <Avatar className="">{user.displayName[0].toUpperCase()}</Avatar>
                   </div>
                   <div className="name-container">
                       <h2>{user.displayName}</h2>
                       <h3>{user.email}</h3>
                   </div>
               </div>

               <div className="bottom">

                   <div className="stat">
                       <p>Who viewed you</p>
                       <p className="number">2,543</p>
                   </div>

                   <div className="stat">
                       <p>View on post</p>
                       <p className="number">2,543</p>
                   </div>

               </div>

           </div>
            <div className="hashtag-card">
                <h2>Recent</h2>
                <div className="hashtags">
                    <Hashtag tag="reactjs" />
                    <Hashtag tag="programming" />
                    <Hashtag tag="softwere dev" />
                    <Hashtag tag="developer" />
                </div>
            </div>
        </DIV>
    )
}


const DIV=styled.div`   
     flex-basis: 15%;
     width: 100%;
     margin-left: 20px;  

     
     .name-card{
         background: #FFF;
         border-radius: 10px;
        .top{
            border-bottom: 1px solid grey;
            padding-bottom: 10px;  

            .background{
                background-color: #71bcf8;
                background-image: linear-gradient(43deg, #71bcf8 0%, #be05b2 46%, #f4f05e 100%);

                width: 100%;
                height: 100px;   
                z-index: 50;
            }

            .avatar{
                display: flex;
                justify-content: center;
                margin-top: -20px;   
                z-index:100;
                cursor: pointer;
            }

            .name-container{
                text-align: center;

                h2{
                    font-size: 16px;
                    
                }
                h3{
                    font-size: 13px;
                    color: grey; 
                }
            }
            
        }
        .bottom{
            display: flex;
            flex-direction: column;
            padding: 11px;  
            
            .stat{
                display: flex;
                justify-content: space-between;   
                font-weight: bold; 

                .number{
                    color: #0090ff;
                }
                p{
                    font-size: 16px;   
                    color: grey; 
                    padding-top: 3px;  

                }
            }
        }
    }

    .hashtag-card{
        background: #FFF;
        border-radius: 10px;
        width: 100%; 
        margin-top: 20px; 
        padding: 20px; 
        padding-right: 0; 
        
        h2{
            font-size: 17px;
            color :grey; 
            padding-bottom: 5px; 
        }
    }
`;      


export default LeftSideBar;
