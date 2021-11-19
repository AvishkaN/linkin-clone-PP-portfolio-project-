import React from 'react'
import styled from 'styled-components';

function HeaderOption({title,Icon,Avatar,LogOut}) {
    return (   
        <DIV onClick={LogOut}>
            {Icon && <Icon className="icon"/>}
            {Avatar && <Avatar className="avatar"/>}
            <h3>{title}</h3>
        </DIV>
    )
}


const DIV=styled.div`   
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-right: 20px;
     color: grey; 
     cursor: pointer;

     .icon,.avatar{
         font-size: 20px;       
    }

    .avatar{
        height: 21px;
        width: 21px;
    }
    h3{  
        font-size: 12px;       

    }


       &:hover{
           color:#000;
       }
`;      


export default HeaderOption;
