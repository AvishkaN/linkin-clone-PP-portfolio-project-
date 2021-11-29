import React from 'react'
import styled from 'styled-components';
import HeaderOption from '../Components/HeaderOption';

import Search from '@mui/icons-material/Search';
import LinkInd from '@mui/icons-material/LinkedIn';

import Home from '@mui/icons-material/Home';
import Group from '@mui/icons-material/Group';
import Jobs from '@mui/icons-material/BusinessCenter';
import Messages from '@mui/icons-material/Chat';
import Notification from '@mui/icons-material/Notifications';
import {Avatar} from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from './redux/userSlice';
import { Link } from 'react-router-dom';
// import {Avata} from '@mui/core';


function Header() {

    
    const dispatch=useDispatch();

    const LogOut=()=>{
        dispatch(logout());

    }

    return (   
        <DIV className={"header"}>
            <div className="header__left">
                <div className="image">
                    <Link to="/">
                        <LinkInd className="logo"/>
                    </Link>
                </div>
                <div className="search">
                     <Search/>
                    <input type="text" className="input" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption
                    Icon={Home}
                    title={'Home'}
                />
                <HeaderOption
                    Icon={Group}
                    title={'My Network'}
                />
                <HeaderOption
                    Icon={Jobs}
                    title={'Jobs'}
                />
                <HeaderOption
                    Icon={Messages}
                    title={'Message'}
                />
                <HeaderOption
                    Icon={Notification}
                    title={'Notification'}
                />
                <HeaderOption
                    Avatar={Avatar}
                    title={'Log Out'}
                    LogOut={LogOut}
                />
            </div>
        </DIV>
    )
}


const DIV=styled.div`   
    display: flex;
    justify-content: space-between; 

    width: 100%;   
    align-items: center;
    border-bottom: .5px solid #000;
    padding: 10px 50px;    

    background: #efeded;
    position: fixed;
    z-index:1000;
    .header{
        &__left{
            display: flex;
            align-items: center;    
            .image{
                .logo{
                    color: blue;
                
                }
            }

            .search{
                background: #eef3f8;
                display: flex;
                align-items: center;  
                padding: 5px;
            }
        }
        &__right{ 
            display: flex;
        }
    }
`;      


export default Header;
