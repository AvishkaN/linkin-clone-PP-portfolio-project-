import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { selectCommentById } from '../Function/genaralFunctions';
import Comment from '../Post';

function Compent({commentsState,postId}) {
    const [relavantComments,setRelavantComments]=useState([]);
    useEffect(() => {

        const GenareteRelavantComments=selectCommentById(commentsState,postId);
      
        setRelavantComments(GenareteRelavantComments);
    }, [commentsState]);

    return (   
        <DIV>
            {/* {console.log(commentsState)} */}
            {
                relavantComments.map(comment=>(
                    <Comment 
                            key={comment.id}
                            id={comment.id}
                            name={'jhon kd'}
                            time={"2021/Nov/22 11:25 AM"}
                            message={comment.data.Comment}
                            classsName="Comment"
                            showText={false}
                    />
                ))
            }
            {/* <Comment 
                    key={`doc.id2`}
                    id={`doc.id`}
                    name={'jhon kd'}
                    time={"2021/Nov/22 11:25 AM"}
                    message={`News is out that fertilizer ban eficiency in democratic `}
                    classsName="Comment"
                    showText={false}

            />
            <Comment 
                    key={`doc.id3`}
                    id={`doc.id`}
                    name={'jhon kd'}
                    time={"2021/Nov/22 11:25 AM"}
                    message={`News is out that fertilizer ban eficiency in democratic `}
                    classsName="Comment"
                    showText={false}

            /> */}


        </DIV>
    )
}


const DIV=styled.div`   
     .Comment{  
        border: 1px solid #00000033;
        /* border-bottom: 1px solid #00000036; */
        margin: 10px auto;
        width: 95%;
        padding-top: 0px;
        padding-bottom: 0px;
        border-radius:0px;  
        
         
        &:hover{
                box-shadow:none;
            }
     }
`;      


export default Compent;