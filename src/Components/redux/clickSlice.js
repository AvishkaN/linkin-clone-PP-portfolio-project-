import {createSlice} from '@reduxjs/toolkit';

export const clickSlice=createSlice({
    name:"clicks",
    initialState:{
        
        clickedPostId:"",
        openOverlay:false,
    //    openOverlay:true,
       openMessage:true,
       
       showPostEditor:false,

    },
    reducers:{
        openOverlayFN:(state,action)=>{

            state.openOverlay=true;
            state.openMessage=true;
            state.clickedPostId=action.payload;
            
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
       
    }
});


export const {openOverlayFN,closeOverlayFN,closeMeassageFN,openPostEditor,closePostEditor} =clickSlice.actions;


//selectors
export const selectClick=(state)=>state.clicks;

export default clickSlice.reducer;
