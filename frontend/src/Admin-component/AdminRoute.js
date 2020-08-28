import React , { useState }from 'react';
import SideBar from './sidebar/SideBar';
import Content from './content/Content';
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Admin.css';
const AdminRoute = (props) =>{
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
    <Router>
        <div className="Admin wrapper">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            {console.log(props.value)}
            <Content id={props.value} toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        </div>
    </Router>
    )
}
export default AdminRoute;