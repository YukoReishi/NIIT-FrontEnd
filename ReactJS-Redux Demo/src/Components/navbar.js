import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div><div class="ui secondary menu" style={{padding:'5px'}}>
            <Link to="/home"><a class="active item">Home</a></Link>
            <Link to="/register"><a class="item" href="/register">Register</a></Link>
        </div>
        </div>
    )
}


export default Navbar