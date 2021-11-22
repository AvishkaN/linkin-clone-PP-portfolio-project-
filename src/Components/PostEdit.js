import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {closePostEditor} from './redux/clickSlice';
import {EditPost} from './redux/postSlice';
import {selectUser} from './redux/userSlice';
import {selectClick} from './redux/clickSlice';

function Comp({message,id}) {

    const [input,setInputVal]=useState(message);
    const [isDisabledValue,setDisabledValue]=useState(true);
    const dispatch = useDispatch();
    const user=useSelector(selectUser);
    const click=useSelector(selectClick);

    const onChangeHandler=(e)=>{
        
        setInputVal(e.target.value)
        setDisabledValue(false)
        
        return
    }
    
    const goToBack=(e)=>{
        dispatch(closePostEditor())

    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        EditPost(click.clickedPostId,input,user,dispatch);

    };

    return (   
        <DIV>
            <div className="wrapper">
                    <form action="" onSubmit={handleSubmit}>
                        <textarea className="textarea" name="" id="" cols="30" rows="5"  value={input} onChange={onChangeHandler}>
                        </textarea>

                        <div className="row">
                            <button className="cancel-btn" onClick={goToBack}>cancel</button>
                            <button className="" type="submit" disabled={isDisabledValue}>save</button>
                        </div>

                    </form>
            </div>
        </DIV>
    )
}


const DIV=styled.div`   
     background: #ffff;   
     width: 100%;
     height: 100%; 
     position: absolute;
     top:0;
     display: flex; 
     align-items: center; 
     z-index: 100;

     .wrapper{
         

        form{

            textarea{
                background: transparent; 
                width: 100%;
                resize: none;
                border-radius: 10px; 
                padding: 6px;
                /* border: 0.1px solid #000 */
            }

            .row{   
                color: #fff;    
                display: flex;   
                justify-content: right;
                button{
                    background: #7574743d;
                    border: none;
                    padding: 6px 25px;
                    border-radius:20px; 
                    margin-right: 8px;
                    margin-top: 7px; 
                    cursor: pointer;

                  
                    
                }
                button:not(:disabled){
                    color:#fff;
                    background: var(--linkind-color);

                    &:hover{
                       opacity: .7;
                    }

                }
                button:disabled{
                    color:#22161696;
                }
                
                .cancel-btn{
                    
                }
                
                .cancel-btn:not(:disabled){
                    background: #dedede;
                    color: #776b7b;
                }
                button:not(:disabled).cancel-btn{
                    color:#000;
                }
            }


        }
     }
`;      


export default Comp;