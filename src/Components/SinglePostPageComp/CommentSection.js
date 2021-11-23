import React from 'react'
import styled from 'styled-components';
import POST from '../Post';

function Compent() {
    return (   
        <DIV>
            
            <POST 
                    key={`doc.id`}
                    id={`doc.id`}
                    name={'jhon kd'}
                    time={"2021/Nov/22 11:25 AM"}
                    message={`News is out that fertilizer ban eficiency in democratic `}
                    classsName="Comment"
                    showText={false}
            />
            <POST 
                    key={`doc.id`}
                    id={`doc.id`}
                    name={'jhon kd'}
                    time={"2021/Nov/22 11:25 AM"}
                    message={`News is out that fertilizer ban eficiency in democratic `}
                    classsName="Comment"
                    showText={false}

            />
            <POST 
                    key={`doc.id`}
                    id={`doc.id`}
                    name={'jhon kd'}
                    time={"2021/Nov/22 11:25 AM"}
                    message={`News is out that fertilizer ban eficiency in democratic `}
                    classsName="Comment"
                    showText={false}

            />


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