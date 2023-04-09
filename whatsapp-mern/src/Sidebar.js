import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'/>
          <div className='sidebar__headerRight'>
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
        <div className='sidebar__search'>
          <div className='sidebar__searchContainer'>
            <SearchOutlinedIcon/>
          <input placeholder='Search of start new chat' 
          type="text"/>
          </div>
        </div>
        <div className='sidebar__chats'>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar