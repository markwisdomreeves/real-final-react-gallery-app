import React from 'react';
import { NavLink } from 'react-router-dom';


const PhotosNavBar = (props) => {
        return (
            <nav className="main-nav">
                <ul className="link-style">
                    <li>
                        <NavLink to="/dogs">
                            Dogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/monkeys">
                            Monkeys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/trees">
                            Trees
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/flowers">
                            Flowers
                        </NavLink>
                    </li>
                </ul>
            </nav>
    )
}


export default PhotosNavBar;


