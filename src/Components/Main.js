import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import LeftSideBar from './LeftSideBar';    
import Center from './centerContetnt';    
import RightSideBar from './rightSideBar';
import {closeCommentEditorFN, selectClick} from './redux/clickSlice';
import POST from './Post';
import PostView from './PostView';



function Home() {

    
    const clicks=useSelector(selectClick);
    const dispatch=useDispatch();

    const wrapperHanlder=(e)=>{

        if(e.target.classList[0]=="post-comment-container"){
            dispatch(closeCommentEditorFN())
        }else{
            return;
        }
    };

    return (   
        <DIV>
            <div className="content">
                    <LeftSideBar/>
                    <Center/>
                    <RightSideBar/>
            </div>

            {clicks.showPostCommentEditor && (
            <div className="post-comment-container" onClick={wrapperHanlder}>
                        <p className="post-comment">
                            
                            <PostView showArrow={false} getDataFromProp={clicks.selectPost}/>
                        </p>
                    </div>
            )}


        </DIV>
    )
}


const DIV=styled.div`   
    position: relative;
    margin-top: 80px;      

.content{

    display: flex;
    width: 100%;  
}

.post-comment-container{
    position: absolute; 
    background: red; 
    background: #000000ba; 
    backdrop-filter : blur(2px);
    cursor: pointer;   

    top: 0;
    left: 0;    
    width: 100%;      
    margin:0px auto ;
    height: 100%; 
    z-index:100;      
    overflow-y: hidden;

    
    .post-comment{  
        width: 75%;       
        margin:0px auto;    
        border-radius :10px; 
        overflow-y: hidden;
    }
}
    
`;      


export default Home;
