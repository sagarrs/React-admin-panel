import "./Home.scss"
import {Sidebar} from '../Sidebar/Sidebar'
import { Navbar } from "../Navbar/Navbar"
import {Widget} from '../Widget/Widget'

export const Home = () => {
    return(
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earnings"/>
                    <Widget type="balance"/>
                </div>
            </div>
        </div>
    )
}