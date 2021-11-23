import React from 'react'
import styled from 'styled-components';
import POST from './Post';
import Reply from './SinglePostPageComp/Reply';
import CommentSection from './SinglePostPageComp/CommentSection';

function Comp() {
    return (   
        <DIV>
            <div className="wrapper">

                <POST 
                    key={`doc.id`}
                    id={`doc.id`}
                    name={'ks guna'}
                    time={"2021/Nov/22 11:25 AM"}
                    message={`News is out that fertilizer ban policy is reversed;though it’s welcome,it shows a grave deficiency in democratic `}
                    classsName="Post"
                    />

                    {/* view share likes counter */}

                    {/* reply */}
                    <Reply/>
                    {/* coment section  -->  coments */}
                    <CommentSection/>



            </div>

        </DIV>
    )
}


const DIV=styled.div`   
    flex-basis:70%;
    width: 100%;   

    position: relative; 
    max-height:100vh;     
    overflow:auto;

    &::-webkit-scrollbar { 
        width: 0 !important 
    }
        
    
    .wrapper{
        width: 95%;  
        margin: 5px auto;
        background: #fff;
        border-radius: 15px;
        display: flex;
        flex-direction: column;  
        

      
        .Post{
            
            &:hover{
                box-shadow:none;
            }
        }
    }
`;      


export default Comp;