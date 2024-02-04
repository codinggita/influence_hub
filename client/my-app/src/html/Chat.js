import React from 'react'
import '../css/Chat.css'
import Box_1 from './Box_1'
import Navbar from './Navbar'
import Footer from './Footer'

function Chat() {
    return (
        <div>
            <Navbar/>
            <div class="box-1">
                <Box_1/>
            </div>
            <div class="main-div-10">
                <div class="chat-nevigation">
                    <h1>Chat Box</h1>
                    <div id="chat-card">
                        <img id="chat-logo" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFufGVufDB8fDB8fHww' alt='chat logo'></img>
                        <p><span>@radha09</span></p>
                    </div>
                    <div id="chat-card">
                        <img id="chat-logo" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFufGVufDB8fDB8fHww' alt='chat logo'></img>
                        <p><span>@rsuchi18</span></p>
                    </div>
                    <div id="chat-card">
                        <img id="chat-logo" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFufGVufDB8fDB8fHww' alt='chat logo'></img>
                        <p><span>@shyam</span></p>
                    </div>
                    <div id="chat-card">
                        <img id="chat-logo" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFufGVufDB8fDB8fHww' alt='chat logo'></img>
                        <p><span>@radha09</span></p>
                    </div>
                </div>
                <div class="chat-section">
                    <div id="chat-display">
                        <div id="chat-reciever">
                            <h6>12:40 pm</h6>
                            <p>You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons.</p>
                        </div>
                        <div id="chat-sender">
                            <h6>12:41 pm</h6>
                            <p>Hello.</p>
                        </div>
                        <div id="chat-reciever">
                            <h6>12:42 pm</h6>
                            <p>Hi. How are You?</p>
                        </div>
                    </div>
                    <div id="type-send">
                        <form>
                            <input type='text' placeholder='Send message'></input>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Chat
