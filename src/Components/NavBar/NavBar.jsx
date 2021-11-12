import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import classes from './NavBar.module.css';

const NavBar = (props) => {

    return (
            <div className={classes.container}>
                <div className={classes.headerTitile}>NIYONIZEYE Jean Paul</div>

                <div className={classes.Menu}>
                    <ul>
                        <li className={classes.list}>
                            <NavLink className="navbar-item" to="/">
                                Home
                            </NavLink>
                        </li>
                         <li className={classes.list}>
                             <NavLink className="navbar-item" to="/add">
                                Add
                            </NavLink>
                         </li>
                         <li className={classes.list}>
                            <NavLink className="navbar-item" to="/login">
                                Login
                            </NavLink>
                         </li>
                
                    </ul>
                </div>
                
            </div>
        );

};

export default NavBar;