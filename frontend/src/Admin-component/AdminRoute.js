import React , { useState }from 'react';
import SideBar from './sidebar/SideBar';
import Content from './content/Content';
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Admin.css';
const AdminRoute = () =>{
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
    <Router>
        <div className="Admin wrapper">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        </div>
    </Router>
    )
}
export default AdminRoute;