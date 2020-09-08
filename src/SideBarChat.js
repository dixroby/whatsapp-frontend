import React from 'react'
import { Avatar } from '@material-ui/core'
import './sidebarChat.css'

function SideBarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>this is the last message</p>
            </div>
        </div>
    )
}

export default SideBarChat
