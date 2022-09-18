import React from "react";
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => isActive ? "nav-site-link navigation-link-active" : "nav-site-link";

const NavSite = () => {

    return (
        <ul className="disordered nav-site">
            <li className="nav-site-item">
                <NavLink className = {setActive} to = "/">Главная</NavLink>
            </li>
            <li className="nav-site-item">
                <NavLink className = {setActive} to = "/about">О Седоне</NavLink>
            </li>
            <li className="nav-site-item">
                <NavLink className = {setActive} to = "/catalog">Гостиницы</NavLink>
            </li>
        </ul>
    )
}

export {NavSite};