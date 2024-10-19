import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import CategoryPage from './Categories';

function Navbar(){
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Categories" element={<CategoryPage/>}/>
    </Routes>
    return(
         <div className="nav_container">
            <button className="create_curation_btn" > Create</button>
            <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Categories">Categories</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            </ul>
         </div>
    )
}
export default Navbar;