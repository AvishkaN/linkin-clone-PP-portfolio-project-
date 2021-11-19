import React from 'react'
import styled from 'styled-components';
import Info from '@mui/icons-material/Info';
import LeftNewsCard from './Left-news-card';

function RightSideBar() {
    
    return (   
        <DIV>
            <div className="wrapper">

            <p className="">Lindin news <Info/></p>
            <LeftNewsCard 
                headeline="Corona virus Uk update"
                description="Top news- 9099 reducer"
                />
            <LeftNewsCard 
                headeline="Redux new version comming soon"
                description="Top news- 9099 reducer"
                />
            <LeftNewsCard 
                headeline="Tesla hits $1000 "
                description="Top news- 9099 reducer"
                />
            <LeftNewsCard 
                headeline="bitcoin breaks-$22k"
                description="Top news- 9099 reducer"
                />
            <LeftNewsCard 
                headeline="Tron coin new update "
                description="Top news- 9099 reducer"
                />

            </div>
        </DIV>
    )
}


const DIV=styled.div`   
     width: 100%;
     flex-basis: 15%;
     margin-right: 20px;  
     
     .wrapper{
         border-radius: 15px;  
         background: #fff;
         padding-bottom: 60px;  
         p{
            padding-top: 40px;  
            display: flex;
            align-items: center; 
            padding-left: 10px;
            padding-top: 10px;
            font-size:15px; 
        }

    }


`;      


export default RightSideBar;
