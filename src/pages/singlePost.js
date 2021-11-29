import React from 'react'
import styled from 'styled-components';
import PostView from '../Components/PostView';
import LeftSideBar from '../Components/LeftSideBar';
import RightSideBar from '../Components/rightSideBar';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Comp() {
    const {postId}=useParams();

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

       
        
        .main{
            display: flex;
            margin-top: 20px;    
            /* position: fixed; */
            /* overflow-y: hidden; */
            margin-top: 70px;
            

            .left{

            }

        }
`;      


export default Comp;