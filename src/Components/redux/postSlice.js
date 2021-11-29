import {createSlice} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { db } from '../Firebase';
import { selectUser } from './userSlice';
import {  closeOverlayFN,closePostEditor} from './clickSlice';

import firebase from 'firebase';



export const postSlice=createSlice({
    name:"post",
    initialState:{
        posts:[], 
        loading: false,
        hasErrors: false,
        error: null,

        postInputLoading:false,
    },
    reducers:{

        loadingPosts:(state)=>{   
            state.loading=true; 

        },
        loadPostsSucsses:(state,action)=>{   
            state.posts=action.payload; 
            state.loading=false; 
            state.hasErrors=false; 
            
        },
        
        LoadPostError:(state,error)=>{   
            state.hasErrors=true; 
            state.loading=false; 
            state.error=error; 

        },

        loadingPostsInput:(state)=>{   
            state.postInputLoading=true; 

        },
        StopLoadingPostsInput:(state)=>{   
            state.postInputLoading=false; 

        },
    }
});



export const {loadPostsSucsses,loadingPosts,LoadPostError,loadingPostsInput,StopLoadingPostsInput} =postSlice.actions; 

//selectors
export const selectPosts=(state)=>state.posts;

export default postSlice.reducer;


// Asynchronous thunk action
export const  fetchPosts =async(dispatch) =>{

     dispatch(loadingPosts());

      try {

        db.collection("post")
            .orderBy("timeStamp","desc")
            .onSnapshot((snapshot)=>{
                if(snapshot.empty) dispatch(LoadPostError("Can't load Post.."));
            dispatch(loadPostsSucsses(
                snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data(),
                }))
            ))
        })


      } catch (error) {
      }
  }



 export  const AddPost=async (dispatch,postMessage,user,post)=>{
    dispatch(loadingPostsInput());

    try{


         const x= await db.collection("post").add({
            name:user.displayName,
            description:"this is a test",
            message:postMessage,
            photoUrl:"",
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(), 
            likedBy:[],
        });


        dispatch(StopLoadingPostsInput());


    }catch(err){

    }

}


export  const DeletePost=async (id,dispatch)=>{

    try{
        
        
        await db.collection("post").doc(id.id).delete().then(() => {
            dispatch(closeOverlayFN());  
  
        }).catch((error) => {
        });

    }catch(err){

    }

}


export  const EditPost=async (id,message,user,dispatch)=>{


    
    
    try{
        const Doc = db.collection('post').doc(id);
        await Doc.update({  
            message:message,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(), 
        }); 
        dispatch(closeOverlayFN());       
        dispatch(closePostEditor());       
      
        
        
        
    }catch(error){  
        console.error("Error writing document: ", error);

    }

};

const filteredPost=(posts,id)=>{
 const likedByArr=posts.filter(post=>post.id===id);
//  console.log(x.data.likedBy);  

//  console.log(likedByArr);
 return likedByArr;  
};


export  const LikePost=async (postId,posts,userEmail)=>{

    // liked userers array
    const likedByArr= filteredPost(posts,postId)[0].data.likedBy;
    
     // current user is liked this post before ?
    const isLikedBeforeArr=likedByArr.filter(userEmailAddress=>userEmailAddress==userEmail);
    
    let newUpdatedArr;
    
    if(isLikedBeforeArr.length){ // current user is liked this post 

        newUpdatedArr=likedByArr.filter(emaiL=>{  // remove current user from likedUseres array
            return emaiL!==userEmail
        });

    }else{  // current user didn't liked this post 
        newUpdatedArr=likedByArr.concat(userEmail); // add this use likedUseres array

    }


    
    try{ 
        // update  firebase new userLikedArray 

        const Doc = db.collection('post').doc(postId);
        await Doc.update({likedBy:newUpdatedArr}); 

    }catch(err){

    }

};




