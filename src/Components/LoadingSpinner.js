import React from 'react'
import styled from 'styled-components';

function LoadingCir({color="" ,width="100px",height="100px",margin,padding,marginRight,marginTop}) {
// function LoadingCir(props) {
    return (   
        // <DIV>
        //     <div class="load"></div>
        // </DIV>

        <DIV class="load"  color={color} width={width} height={height} padding={padding} margin={margin} marginRight={marginRight} marginTop={marginTop}></DIV>

    )
}


const DIV=styled.div`   
      @keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to { 
        transform: rotate(360deg);
    }
}
 

 @-webkit-keyframes rotate {
    from {
        -webkit-transform: rotate(0deg);
    }
    to { 
        -webkit-transform: rotate(360deg);
    }
}

width: ${props => props.width};
height: ${props => props.height};
margin: 110px auto 0;
border:solid 10px blue;
background: ${props => props.color};
border-radius: 50%;
border-right-color: transparent;
border-bottom-color: transparent;
 -webkit-transition: all 0.5s ease-in;
-webkit-animation-name:             rotate; 
-webkit-animation-duration:         1.0s; 
-webkit-animation-iteration-count:  infinite;
-webkit-animation-timing-function: linear;
    
     transition: all 0.5s ease-in;
animation-name:             rotate; 
animation-duration:         1.0s; 
animation-iteration-count:  infinite;
animation-timing-function: linear; 
margin: ${props => props.margin && props.margin };
margin-top:${props => props.marginTop};
margin-right:${props => props.marginRight};


.load {
}
`;      


export default LoadingCir;

