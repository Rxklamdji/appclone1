
import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './SidebarRow.css';

function SidebarRow ({src, Icon, title}) {
    return (
        <div className='sidebarRow'>

            {src && <AccountBoxIcon src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
            
        </div>
    );
}

export default SidebarRow;
