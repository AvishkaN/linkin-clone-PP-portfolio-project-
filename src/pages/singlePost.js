import React from 'react'
import styled from 'styled-components';
import PostView from '../Components/PostView';
import LeftSideBar from '../Components/LeftSideBar';
import RightSideBar from '../Components/rightSideBar';
import Header from '../Components/Header';

function Comp() {
    return (   
        <DIV> 
            <Header className={"header-style"}/>
            
            <div className="main">

                    <LeftSideBar className="left"/>
                    <PostView/>
                    <RightSideBar/>
            </div>
        </DIV>
    )
}


const DIV=styled.div`   
        width: 100%;  
        position: relative;

        .header-style{
            background: #efeded;
            position: fixed;
            z-index:1000;
        }
        
        .main{
            display: flex;
            margin-top: 20px;    
            /* position: fixed; */
            /* overflow-y: hidden; */
            margin-top: 70px;
            

            .left{
            background: yellow;  
                position: static;
            }

        }
`;      


export default Comp;