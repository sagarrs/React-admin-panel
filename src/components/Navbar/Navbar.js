import "./Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../Context/darkModeContext';

export const Navbar = () => {

    const { dispatch } = useContext(DarkModeContext);

    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search...."/>
                    <SearchOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({type: "TOGGLE"})}/>
                        
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon"/>
                        
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <div className="counter">
                            <p>1</p>
                        </div>
                        
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                        <div className="counter">
                            <p>1</p>
                        </div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                        
                    </div>
                    <div className="item">
                        <img src="../../../images/profile_pic.jpg" className="avatar" alt="profile_pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}