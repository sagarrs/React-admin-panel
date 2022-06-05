import "./Datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../DatatableSource'
import {Link} from "react-router-dom"

export const Datatable = () => {

    const actionColumn = [
        {
            field: 'action', 
            headerName: 'Action',
            width: 200,
            renderCell:()=>{
                return(
                    <div className="cellAction">
                        <Link to="/users/test" style={{textDecoration: "none"}}>
                            <div className="viewButton">
                                View
                            </div>
                        </Link>
                        <div className="deleteButton">
                            Delete
                        </div>
                    </div>
                )
            }
        }
    ]
    return(
        <div className="datatable">
            <div className="datatableTitle">
                Add new user
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}