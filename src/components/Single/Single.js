import "./Single.scss"
import {Sidebar} from '../Sidebar/Sidebar'
import {Navbar} from '../Navbar/Navbar'
import {Chart} from '../Charts/Chart'
import {List} from '../Table/Table'

export const Single = () => {
    return(
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>

                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="item_img" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janeDoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+91 9999999999</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">#123, 4th street, vidhana soudha bangalore, 560001</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <Chart 
                            height={300}
                            // aspect={2 / 1} 
                            title="User spending last 6 months"/>
                    </div>
                </div>

                <div className="bottom">
                    <h1 className="title">Last transactions</h1>
                    <List/>
                </div>

            </div>
        </div>
    )
}