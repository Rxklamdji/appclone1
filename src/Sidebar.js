import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';

function Sidebar() {

    return (

        <div className='sidebar'>

            <SidebarRow Icon={EmojiObjectsIcon} title='Pages'/>
            <SidebarRow Icon={EmojiEventsIcon} title = 'Events'/>
            <SidebarRow Icon={EmojiFlagsIcon} title = 'Tasks'/>
            <SidebarRow />


            
        </div>
    );
}

export default Sidebar;
