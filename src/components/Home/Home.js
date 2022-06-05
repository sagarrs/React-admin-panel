import "./Home.scss"
import {Sidebar} from '../Sidebar/Sidebar'
import { Navbar } from "../Navbar/Navbar"
import {Widget} from '../Widget/Widget'
import { FeaturedChart } from "../FeaturedCharts/FeaturedChart"
import { Chart } from "../Charts/Chart"
import { List } from "../Table/Table"

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
                <div className="charts">
                    <FeaturedChart/>
                    <Chart title="Last 6 months revenue"/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest transactions</div>
                    <List/>
                </div>
            </div>
        </div>
    )
}