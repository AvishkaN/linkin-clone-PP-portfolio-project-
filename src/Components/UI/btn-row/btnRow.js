import React from 'react'
import styled from 'styled-components';
import GenarateBtn from './genateBtn';

import Like from '@mui/icons-material/ThumbUpSharp';
import Comment from '@mui/icons-material/Comment';
import Share from '@mui/icons-material/Share';
import Send from '@mui/icons-material/Send';



function Compent({showText=true}) {
    return (   
        <DIV >
            <GenarateBtn Icon={Like} Text={showText && "Like"} className="btn"/>
            <GenarateBtn Icon={Comment} Text={showText &&"Comment"} className="btn"/>
            <GenarateBtn Icon={Share} Text={showText &&"Share"} className="btn"/>
            <GenarateBtn Icon={Send} Text={showText &&"Send"} className="btn"/>
        </DIV>
    )
}


const DIV=styled.div`   
            display: flex;
             justify-content: space-between;
             padding-top:7px;
            padding-bottom:7px;
            width: 100%; 

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

`;      


export default Compent;