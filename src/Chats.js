import React from 'react'
import './Chats.css'
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat 
            name="Sarah"
            message="Hey Whats up"
            timestamp="35 minutes ago"
            profilePic="data:image/jpeg;base64,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"
    
            />
            
        </div>
    )
}

export default Chats;