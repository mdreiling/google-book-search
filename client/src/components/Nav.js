import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/">
                Google Books Search
            </Link>
            <div>
                <ul>
                    <li>
                        <Link
                            to="/"
                        > 
                        Search
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;