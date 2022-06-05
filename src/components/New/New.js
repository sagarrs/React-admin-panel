import "./New.scss"
import {Navbar} from '../Navbar/Navbar'
import {Sidebar} from '../Sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

export const New = ({inputs, title}) => {
    const [file, setFile] = useState('')
    return(
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="img_icon" />
                    </div>
                    <div className="right">

                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon"/></label>
                                <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{display: "none"}}/>
                            </div>

                            {inputs.map((input) => {
                                return(
                                    <div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder} />
                                    </div>
                                )
                            })}
                            <button>Send</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}