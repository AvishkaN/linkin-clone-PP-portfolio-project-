import React, { useState } from 'react'
import styled from 'styled-components';

function Comp({text="button" , isDisabled=false}) {

    return (   
        <Button className="" type="submit" disabled={isDisabled}>{text}</Button>
    )
}


const Button=styled.button`   
  
  
            background: #7574743d;
            border: none;
            padding: 6px 25px;
            border-radius:20px; 
            margin-right: 5px;
            cursor: pointer;


        &:not(:disabled){
            color:#fff;
            background: var(--linkind-color);

            &:hover{
                opacity: .7;
            }

        }
        &:disabled{
            color:#22161696;
        }
`;      


export default Comp;