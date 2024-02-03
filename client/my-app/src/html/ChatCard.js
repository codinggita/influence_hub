import React from 'react'
import '../css/ChatCard.css'

export default function ChatCard() {
    return (
        <div class="chat-card">
            <div id='chat-details'>
                <h1>@user1</h1>
                <h6>12:32 Pm</h6>
            </div>
            <p>Message is displayed here</p>
        </div>
    )
}
