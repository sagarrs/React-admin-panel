import "./List.scss"
import { Sidebar } from "../Sidebar/Sidebar"
import {Navbar} from "../Navbar/Navbar"
import { Datatable } from "../Datatable/Datatable"

export const List = () => {
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Datatable/>
            </div>
        </div>
    )
}