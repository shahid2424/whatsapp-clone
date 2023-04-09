import React from 'react'
import './SidebarChat.css';
import Avatar from '@mui/material/Avatar';

function SidebarChat() {
  return (
    <div className='sidebarchat'>
        <Avatar/>
        <div className='sidebarchat__info'>
            <h2> Room Name</h2>
            <p>This is the last message</p>
        </div>
    </div>
  )
}

export default SidebarChat