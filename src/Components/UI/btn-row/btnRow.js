import React from 'react'
import styled from 'styled-components';
import GenarateBtn from './genateBtn';

import Like from '@mui/icons-material/ThumbUpSharp';
import Comment from '@mui/icons-material/Comment';
import Share from '@mui/icons-material/Share';
import Send from '@mui/icons-material/Send';



function Compent({showText=true,buttonRowHandler,isLiked}) {

    const handleClick=(e)=>{
        // console.log(e.target);    
        // console.log(e.target.closest('div').classList[1]);   


        if(e.target.closest('div').classList[1]==="like-data-set"){

            return  buttonRowHandler("like");
        }
        if(e.target.closest('div').classList[1]==="comment-data-set"){

            return  buttonRowHandler("comment");
        }

        return;
    };

    return (   
        <DIV onClick={handleClick}>
            <GenarateBtn Icon={Like} Text={showText && "Like"} className={`btn like-data-set ${isLiked && "liked-color"}`}/>
            <GenarateBtn Icon={Comment} Text={showText &&"Comment"} className="btn comment-data-set"/>
            <GenarateBtn Icon={Share} Text={showText &&"Share"} className="btn share-data-set"/>
            <GenarateBtn Icon={Send} Text={showText &&"Send"} className="btn send-data-set"/>
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

            .liked-color{
                color: #0090ff;   
                transition:all .1s;
            }


`;      


export default Compent;