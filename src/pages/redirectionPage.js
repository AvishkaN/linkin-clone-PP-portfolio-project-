import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Comp() {


    const history=useHistory();
    return (   
        <DIV>
            redirecting....
            {history.push("/register")}
        </DIV>
    )
}


const DIV=styled.div`   
     
`;      


export default Comp;