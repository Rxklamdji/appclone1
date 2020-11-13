import React from 'react'
import Story from './Story';
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image = '/images/male-avatar-profile-picture-vector-10211761.jpg'
            profileSrc='/images/NatureBackground1.jpg'
            title='Agent 00' />

            <Story image = '/images/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg'
            profileSrc='/images/Nature2.jpg'
            title='Agent 01' />

            <Story image = '/images/timothy-paul-smith-256424-1200x800.jpg'
            profileSrc='/images/Nature3.jpg'
            title='Agent 02' />

            
        </div>
    )
}

export default StoryReel;
