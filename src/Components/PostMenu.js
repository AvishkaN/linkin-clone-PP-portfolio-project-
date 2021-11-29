import React from 'react'
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { DeletePost } from './redux/postSlice';
import {  closeOverlayFN,closeMeassageFN,openPostEditor,closePostEditor} from './redux/clickSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




function Comp(id) {

    const dispatch=useDispatch();
    const history=useHistory();

    const deleteHandler=async ()=>{


        await  DeletePost(id,dispatch);

        if(history.location.pathname.startsWith("/posts")){
            history.push("/"); 
        }
    };

    const handleEdit=async()=>{  


        await dispatch(openPostEditor(),id)
        await dispatch(closeMeassageFN())

        
        if(history.location.pathname.startsWith("/posts")){
            history.push("/"); 
        }
    };

    return (   
        <DIV>
            <p onClick={deleteHandler}>Delete <DeleteIcon className="iconI"/></p> 
            <p onClick={handleEdit}>Edit </p> 
        </DIV>
    )
}


const DIV=styled.div`   
     background: yellow; 
     display: flex;
     flex-direction: column;
     min-width: 192px;
    padding: 9px;
    padding-left: 9px;
    padding-left: 33px;
    background: #fffafa;
    border-radius: 11px;
    width: 30%;   
    margin: auto auto;

    z-index: 100;
position: sticky;

    p{
        display: flex;
        flex-direction: row; 
        justify-content: space-between;
        align-items: center; 
        padding-bottom: 10px;    
        cursor: pointer;
        border-radius: 4px;
        padding-top: 15px;

        /* align-items: center; 
        justify-content: start; */

        &:hover{
            background: #06030326;
        }
    }
`;      


export default Comp;
