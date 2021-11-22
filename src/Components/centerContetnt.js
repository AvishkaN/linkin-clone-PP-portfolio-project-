import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import POST from './Post';
import PostInput from './PostInput';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPosts } from './redux/postSlice';
import LoadingCir from './LoadingSpinner';


const genarateDate=(timeStamp)=>{

    const year=new Date(timeStamp*1000).getFullYear();
    const month=new Date(timeStamp*1000).toLocaleString('default', { month: 'short' });
    const date=new Date(timeStamp*1000).toLocaleString("en-US", {day: "numeric"});
  
    const hour=new Date(timeStamp*1000).toLocaleString("en-US", {hour: "numeric"}); 
    const minute=new Date(timeStamp*1000).toLocaleString("en-US", {minute: "numeric"}); 

    const status=`${hour}`.replace(/[^a-z]/gi, '');
    const hourNum=`${hour}`.replace(/\D+/g, "");

   

    const str=`${year}/${month}/${date}` + "   "+ "   "+ `${hourNum}:${minute} ${status}`;



    return str;
};



function Center() {
    const dispatch=useDispatch();
    const Posts=useSelector(selectPosts);
    

    useEffect(()=>{
     
        fetchPosts(dispatch);
                
    },[]);




    return (   
        <DIV>
            <PostInput />

            {Posts.loading  && <LoadingCir/>}
            {Posts.error && <p>{Posts.error.payload}</p>}

                {Posts.posts.map(doc=>( 
                        <POST 
                            key={doc.id}
                            id={doc.id}
                            name={doc.data.name}
                            time={genarateDate(doc.data.timeStamp?.seconds?doc.data.timeStamp.seconds :1637161290)}
                            message={doc.data.message}
                        />
                ))}
        </DIV>
    )
}


const DIV=styled.div`   

     flex-basis:70%;
    width: 100%; 
`;      


export default Center;
