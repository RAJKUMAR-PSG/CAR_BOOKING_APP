import React from 'react'
import {  Link } from 'react-router-dom'
import "./Messages.scss"

const Messages = () => {

    const currentUser={
        id:1,
        username:"raj",
        isSeller:true
    };

    const message = "lorem ipsum dolor sit amet , consecutor adipisicing elit . alias,that i am a good boy from the day that i was born "

    return (
       <div className='messages'>
        <div className="container">
            <div className="title">
                <h1>Messasges</h1>
            </div>
            <table>
                <tr>
                    <th>Buyer</th>
                    <th>Last Message</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
                <tr className="active">
                    <td>
                        john doe
                    </td>
                    <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark as Read</button>
                    </td>
                </tr>
                <tr className="active">
                    <td>
                        john doe
                    </td>
                    <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark as Read</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        john doe
                    </td>
                    <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                    <td>1 day ago</td>
                    
                </tr>
                <tr>
                    <td>
                        john doe
                    </td>
                    <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                    <td>1 day ago</td>
                   
                </tr>
                <tr>
                    <td>
                        john doe
                    </td>
                    <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                    <td>1 day ago</td>
                   
                </tr>
                <tr>
                    <td>
                        john doe
                    </td>
                    <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                    <td>1 day ago</td>
                   
                </tr>
                <tr>
                    <td>
                        john doe
                    </td>
                    <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                    <td>1 day ago</td>
                   
                </tr>
                <tr>
                    <td>
                        john doe
                    </td>
                    <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                    <td>1 day ago</td>
                    
                </tr>
            </table>
        </div>
       </div>
    )
}

export default Messages