import "./Home.scss"
import {Sidebar} from '../Sidebar/Sidebar'

export const Home = () => {
    return(
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">container</div>
        </div>
    )
}