import { Avatar } from '@mui/material';
import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Button from '../UI/buttons/defaultBtn';

function Comp({addComment}) {

    const[isDisabled,setIsDesabled]=useState(true);
    const inputRef=useRef();


    const hanldeSubmit=(e)=>{
        e.preventDefault(); 

        const inputedValue=inputRef.current.value;

        addComment(inputedValue);
    };


    return (   
        <DIV>
            <div className="wrapper">
                <form action="" onSubmit={hanldeSubmit}>

                    <Avatar className="Avatar"></Avatar>
                    <input type="text" ref={inputRef} className="input" placeholder="Type Your Reply" onChange={()=>setIsDesabled(false)}/>
                    <Button  text={"reply"} isDisabled={isDisabled} />
                </form>
            </div>
        </DIV>
    )
}


const DIV=styled.div`       
    width: 100%; 
    margin-bottom: 20px;    
    margin-top: -10px;     
     .wrapper{
         form{
        display: flex;  
        align-items: center;  
        flex-direction: row !important; 


            .Avatar{
    
            }
    
            input{
                flex: 1;
                margin-left: 5px; 
                padding-left: 2px;   
                &:focus{
                    border-bottom: 2px solid var(--linkind-color);
                }
            }
            button{
            }
        }
     }
`;      


export default Comp;