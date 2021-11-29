import {createSlice} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { db } from '../Firebase';
import { selectUser } from './userSlice';
import {  closeOverlayFN,closePostEditor} from './clickSlice';

import firebase from 'firebase';



export const commentSlice=createSlice({
    name:"post",
    initialState:{
        comments:[], 
        commentsloading: false,
        commentshasErrors: false,

    },
    reducers:{

        loadingCommentsFN:(state)=>{   
            state.commentsloading=true; 

        },
        loadCommentSucssesFN:(state,action)=>{   
            state.comments=action.payload; 
            state.commentsloading=false; 
            state.commentshasErrors=false; 
            
        },
        
        LoadCommentErrorFN:(state,error)=>{   
            state.commentsloading=false; 
            state.commentshasErrors=error; 

        },

 
    }
});



export const {loadingCommentsFN,loadCommentSucssesFN,LoadCommentErrorFN} =commentSlice.actions; 

//selectors
export const selectComments=(state)=>state.comments;

export default commentSlice.reducer;


// Asynchronous thunk action
export const  fetchComments =async(dispatch) =>{

     dispatch(loadingCommentsFN());

      try {

        db.collection("comments")
            .orderBy("timeStamp","desc")
            .onSnapshot((snapshot)=>{
                if(snapshot.empty) dispatch(LoadCommentErrorFN("Can't load Post.."));
            dispatch(loadCommentSucssesFN(
                snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data(),
                }))
            ))
        })


      } catch (error) {
      }
  }



 export  const AddComment=async (dispatch,userEmail,Comment,postId)=>{

    try{
         await db.collection("comments").add({
            Useremail:userEmail,
            Comment:Comment,
            postId:postId,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(), 
        });

    }catch(err){

    }

}


// export  const DeletePost=async (id,dispatch)=>{

//     try{
        
        
//         await db.collection("post").doc(id.id).delete().then(() => {
//             dispatch(closeOverlayFN());  
  
//         }).catch((error) => {
//         });

//     }catch(err){

//     }

// }


// export  const EditPost=async (id,message,user,dispatch)=>{


    
    
//     try{
//         const Doc = db.collection('post').doc(id);
//         await Doc.update({  
//             message:message,
//             timeStamp:firebase.firestore.FieldValue.serverTimestamp(), 
//         }); 
//         dispatch(closeOverlayFN());       
//         dispatch(closePostEditor());       
      
        
        
        
//     }catch(error){  
//         console.error("Error writing document: ", error);

//     }

// };

// const filteredPost=(posts,id)=>{
//  const likedByArr=posts.filter(post=>post.id===id);
// //  console.log(x.data.likedBy);  

// //  console.log(likedByArr);
//  return likedByArr;  
// };


// export  const LikePost=async (postId,posts,userEmail)=>{

//     // liked userers array
//     const likedByArr= filteredPost(posts,postId)[0].data.likedBy;
    
//      // current user is liked this post before ?
//     const isLikedBeforeArr=likedByArr.filter(userEmailAddress=>userEmailAddress==userEmail);
    
//     let newUpdatedArr;
    
//     if(isLikedBeforeArr.length){ // current user is liked this post 

//         newUpdatedArr=likedByArr.filter(emaiL=>{  // remove current user from likedUseres array
//             return emaiL!==userEmail
//         });

//     }else{  // current user didn't liked this post 
//         newUpdatedArr=likedByArr.concat(userEmail); // add this use likedUseres array

//     }


    
//     try{ 
//         // update  firebase new userLikedArray 

//         const Doc = db.collection('post').doc(postId);
//         await Doc.update({likedBy:newUpdatedArr}); 

//     }catch(err){

//     }

// };




