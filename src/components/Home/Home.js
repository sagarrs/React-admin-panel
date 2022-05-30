import "./Home.scss"
import {Sidebar} from '../Sidebar/Sidebar'
import { Navbar } from "../Navbar/Navbar"

export const Home = () => {
    return(
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
            </div>
        </div>
    )
}