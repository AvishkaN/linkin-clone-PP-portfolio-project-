import React from 'react'
import styled from 'styled-components';
import LeftSideBar from './LeftSideBar';    
import Center from './centerContetnt';    
import RightSideBar from './rightSideBar';



function Home() {
    return (   
        <DIV>
             <LeftSideBar/>
             <Center/>
             <RightSideBar/>
        </DIV>
    )
}


const DIV=styled.div`   
     display: flex;
     width: 100%;  
     margin-top: 20px; 
`;      


export default Home;
