import React from 'react'
import "./chat.css"
import {Avatar, IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>LAS seen at..</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Dix</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">Dix</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">Dix</span>
                    This is message This is message This is message This is message v vThis is messageThis is message This is message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input placeholder="Type a message"/>
                    <button type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default chat
