import React from 'react'
import styled from 'styled-components';

function Home({tag}) {
    return (   
        <DIV>
            <p>
                <span className="hash">#</span>
                <span className="tag">{tag}</span>
            </p>
        </DIV>
    )
}


const DIV=styled.div`   

p{
    font-size: 15px; 
    color: grey; 
    cursor: pointer;
    
    &:hover{
        color: #0090ff;

    }

    .hash{
        margin-right:14px;
        font-size: inherit;
    }
    .tag{
        font-size: inherit;

    }
}
     
`;      


export default Home;