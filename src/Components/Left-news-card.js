import React from 'react'
import styled from 'styled-components';
import Bolt from '@mui/icons-material/FiberManualRecord';



function CARD({headeline,description}) {
    return (   
        <DIV>
            <Bolt className="icon"/>
            <div className="text">
            <p className="headeline">{headeline}</p>
            <p className="description">{description}</p>
            </div>
        </DIV>
    )
}


const DIV=styled.div`   
     display: flex;
     padding-bottom: 10px; 
     cursor: pointer;

     &:last-child{
         border-bottom:0px solid grey;
     }

     border-bottom:1px solid grey;

     .icon{
         margin-top: 9px;
         margin-right: -11px;
     }
     .text{

        .headeline{
            font-weight: bold; 
        }
        .description{
            color: grey; 
        }

     }
`;      


export default CARD;