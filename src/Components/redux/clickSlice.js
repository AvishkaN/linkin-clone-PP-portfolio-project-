import {createSlice} from '@reduxjs/toolkit';

export const clickSlice=createSlice({
    name:"clicks",
    initialState:{
        
        clickedPostId:"",
        openOverlay:false,
    //    openOverlay:true,
       openMessage:true,
       
       showPostEditor:false,
       showPostCommentEditor:false,
       selectPost:"",

    },
    reducers:{
        openOverlayFN:(state,action)=>{

            state.openOverlay=true;
            state.openMessage=true;
            state.clickedPostId=action.payload;
        },
        openCommentEditorFN:(state)=>{

            // state.openOverlay=true;
            state.showPostCommentEditor=true;
            
        },
        closeCommentEditorFN:(state)=>{

            // state.openOverlay=true;
            state.showPostCommentEditor=false;
            
        },
        closeOverlayFN:(state,action)=>{
            state.openOverlay=false;
            state.openMessage=false;
        },
        closeMeassageFN:(state,action)=>{
            state.openMessage=false;
        },

        openPostEditor:(state,action)=>{
            state.openOverlay=true;
            state.showPostEditor=true;

        },
        closePostEditor:(state,action)=>{
            state.showPostEditor=false;
            state.openOverlay=false; 

        },
        selectPostFN:(state,action)=>{
            state.selectPost=action.payload; 

        },
       
    }
});


export const {openOverlayFN,closeOverlayFN,closeMeassageFN,openCommentEditorFN,closeCommentEditorFN,openPostEditor,closePostEditor,selectPostFN} =clickSlice.actions;


//selectors
export const selectClick=(state)=>state.clicks;

export default clickSlice.reducer;
