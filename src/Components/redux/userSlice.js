import {createSlice} from '@reduxjs/toolkit';

export const userSlice=createSlice({
    name:"user",
    initialState:{
        // default
        user:null,

        // tempory  for building reason 
        
        user:{
            email:"av@gmail.com",
            uid:"5vkjUDtcTGbbiJuOEh7FMZbPFZx1",
            displayName:"Avishka Nirmitha",
            photoUrl:null
        }

        // user:{
        //     email:"sdadasdasdassdasdadsasddasdasdasdasdasjayathissaara@gmail.com",
        //     uid:"5vkjUDtcTGbbiJuOEh7FMZbPFZx1",
        //     displayName:"avNIr",
        //     photoUrl:null
        // }

    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        }
    }
});


export const {login,logout} =userSlice.actions;


//selectors
export const selectUser=(state)=>state.user.user;

export default userSlice.reducer;
