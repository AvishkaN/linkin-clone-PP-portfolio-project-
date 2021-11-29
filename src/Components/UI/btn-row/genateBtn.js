import React from 'react'
import styled from 'styled-components';

function Compent({Icon,Text,className=""}) {
    return (   
    <div className={`${className}`}>
        <Icon className="icon" />
        <p>{Text}</p>
    </div>
    )
}


const DIV=styled.div`   
     
`;      


export default Compent;