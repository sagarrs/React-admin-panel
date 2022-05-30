import "./Sidebar.scss"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="top">
                <span className="logo">sagar admin</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardOutlinedIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <Inventory2OutlinedIcon className="icon"/>
                        <span>Products</span>
                    </li>
                    <li>
                        <ShoppingBagOutlinedIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsOutlinedIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <StorageOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <ManageAccountsOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}