import React from 'react'
import {  Link } from 'react-router-dom'
import "./Message.scss"


const Message = () => {
    return (
       <div className='message'>
        <div className="container">
            <span className="breadcrumbs">
                <Link to="/messages">MESSAGES</Link>  JOHN DOE  
            </span>
            <div className="messages">
                <div className="item">
                    <img src="" alt="" />
                    <P>
                        lorem ipsum dolor sit amet consectetor adipisicing elit.Eos iure
                        mollita perspiciatis officiis voluptate? sequi quae officia
                        possimus,iusto labore alias mollitia eveniet nemo placeat
                        laboriosam nisi animi! Error , tenetur!
                    </P>
                </div>
            </div>
            <div className="write">
                <textarea name="" placeholder="write a message" id="" cols="30" rows="10"></textarea>
                <button>send</button>
            </div>
        </div>
       </div>
    )
}

export default Message