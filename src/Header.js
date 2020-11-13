import React from 'react';
import "./Header.css";
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import HomeIcon from '@material-ui/icons/Home';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SendIcon from '@material-ui/icons/Send';
import ForumIcon from '@material-ui/icons/Forum';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


function Header() {


    return ( 
            
            <div className = 'header'>


                 <div className = 'header_left'>

                    <img src = "/images/Symbol1.png" alt="" />

                    <div className='header_input'>
                        <SearchIcon />
                        <input placeholder='Component Structure Search' type='text' />
                    </div>

                </div>

                <div className = 'header_center'>

                    <div className='header_option header_option--active'>

                        <HomeIcon fontSize='large'/>

                    </div>

                     <div className='header_option'>
                        <ExpandMoreIcon />
                    </div>

                    <div className='header_option'>
                        <EditIcon />        
                    </div>  

                    <div className='header_option'>
                        <ClearIcon />      
                    </div>  

                    <div className='header_option'>
                        <AutorenewIcon fontSize='large' />         
                    </div>  


                    <div className='header_option'>
                        <SendIcon />
                    </div>


                </div>  

                <div className = 'header_right'>

                    <IconButton>

                        <ForumIcon />
            
                    </IconButton> 

            <       IconButton>
                
                        <NotificationsActiveIcon />
            
                    </IconButton>  

                    <IconButton>
                
                        <HelpIcon />
            
                    </IconButton>      
    
                </div>  

            

                
            
            </div>


    )
}

export default Header



