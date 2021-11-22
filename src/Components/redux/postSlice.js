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
        
     await db.collection("post").doc(id).set({
        name:user.displayName,
        description:"this is a test",
        message:message,
        photoUrl:"",
        timeStamp:firebase.firestore.FieldValue.serverTimestamp(), 
        })
        .then(() => {
            dispatch(closeOverlayFN());       
            dispatch(closePostEditor());       


        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
     

    }catch(err){

    }

}




