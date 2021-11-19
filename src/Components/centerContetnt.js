import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import POST from './Post';
import PostInput from './PostInput';
import FlipMove from 'react-flip-move';

// import { collection, addDoc ,FieldValue,getDocs} from "firebase"; 
import {db} from "./Firebase"; 


function Center() {
    const [Posts, setPost] = useState([]);

    useEffect(async()=>{
     
        
        db.collection("post")
             .orderBy("timeStamp","desc")
            .onSnapshot((snapshot)=>{
                setPost(
                    snapshot.docs.map(doc=>({
                        id:doc.id,
                        data:doc.data(),
                    }))
                )
            })

    },[]);



    return (   
        <DIV>
            <PostInput />
            {console.log(Posts)}

            <FlipMove>
                {Posts.map(doc=>( 
                        <POST 
                            key={doc.id}
                            name={doc.data.name}
                            time={doc.data.time}
                            message={doc.data.message}
                        />
                ))}
        </FlipMove>
        </DIV>
    )
}


const DIV=styled.div`   

     flex-basis:70%;
    width: 100%; 
`;      


export default Center;
