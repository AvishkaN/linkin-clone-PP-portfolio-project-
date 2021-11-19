import React from 'react'
import styled from 'styled-components';

function Button({color,Icon,Text}) {
    return (   
        <DIV>
            <Icon style={{color:color}} className="icon"/>
            <h3>{Text}</h3>
        </DIV>
    )
}


const DIV=styled.div`   
     
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 16px;   

    h3{
        font-size: inherit;
    }
    .icon{
        font-size: inherit;
        margin-right: 5px; 
    }
`;      


export default Button;
