import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './Story.css';

function Story({ image, profileSrc, title}) {

    return (
        <div style = {{ backgroundImage:`url(${image})`}}
        className='story'> 

            <AccountBoxIcon className='story__avatar' src={profileSrc} />
            <h4>{title}</h4>

            
        </div>
    )
}

export default Story
