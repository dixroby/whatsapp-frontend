import React from 'react'
import "./sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SideBarChat from './SideBarChat';

function SideBar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar
                    src='https://linbots.com/wp-content/uploads/2019/05/welcome-chatbot.png?x86535'/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar__searchContainer">
                    <SearchIcon/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats"> 
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />
            </div>
        </div>
    )
}

export default SideBar
