import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import POST from './Post';
import Reply from './SinglePostPageComp/Reply';
import CommentSection from './SinglePostPageComp/CommentSection';
import {selectPosts,fetchPosts} from './redux/postSlice';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AddComment, fetchComments, selectComments } from './redux/commentSlice';
import { selectUser } from './redux/userSlice';
import { selectCommentById } from './Function/genaralFunctions';

function Comp({showArrow=true ,getDataFromProp=null}) {
    const {postId}=useParams();
    const posts=useSelector(selectPosts); 
    const user=useSelector(selectUser); 
    const comments=useSelector(selectComments); 
    const [filteredPost,setFilteredPost]=useState([]);
    const dispatch=useDispatch();

    useEffect(() => {

        fetchComments(dispatch);

        
        if(posts.posts.length===0){
            
            fetchPosts(dispatch);
        }
        let filteredpost;

        if(getDataFromProp){
            setFilteredPost(getDataFromProp);   

        }else{
            filteredpost=posts.posts.filter(post=>post.id==postId)[0];
            setFilteredPost(filteredpost);   

        }


      
        
    }, [])
    

    
    const addComment=(inputedValue)=>{
        AddComment(dispatch,user.email,inputedValue,filteredPost.id)
    };


    return (   
        <DIV>
            <div className="wrapper">
                <POST 
                    key={filteredPost?.id}
                    id={filteredPost?.id}
                    name={filteredPost?.data?.name}
                    message={filteredPost?.data?.message}

                    classsName="Post"      
                    />    
          
                {showArrow &&<Link to="/" className="Link a">
                    <ArrowBackIcon className="back-icon iconI"/> 
                </Link>}
                    {/* view share likes counter */}

                    {/* reply */}
                    <Reply addComment={addComment}/>
                    {/* coment section  -->  coments */}
                    <CommentSection commentsState={comments.comments} postId={filteredPost.id}/>



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
            position: relative;
            &:hover{
                box-shadow:none;
            }
        }

        .Link{
            position: absolute;
            margin: 11px;   
            border-radius: 50%;
            display: flex; 
            align-items: center; 
            justify-content: center;
            padding: 3px;          

            &:hover{
                background: var(--icon-hover-color);
            }

            .back-icon{
                /* color: red;  */
                
            }
        }
    }
`;      


export default Comp;