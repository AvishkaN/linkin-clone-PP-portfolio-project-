import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { closeOverlayFN } from '../Components/redux/clickSlice';

function Comp({on}) {
    const dispatch = useDispatch();

    const closeOverlay=(e)=>{

        if(e.target.classList[2]=="overlay-wrapper"){
            dispatch(closeOverlayFN())
        }

    };

    return (   
        <>
            { on &&   (
            <DIV onClick={closeOverlay} className="overlay-wrapper">
            
            </DIV>)}
        </>
    )
}


const DIV=styled.div`   
     background: transparent;    
     background: #000000ba; 
     backdrop-filter : blur(2px);
     position: absolute;
      top: 0;  
     width: 100%;
     height: 100%;

     display: flex;
     flex-direction: column;
     justify-content: center;
     cursor: pointer;

     transition: background 2s;
`;      


export default Comp;