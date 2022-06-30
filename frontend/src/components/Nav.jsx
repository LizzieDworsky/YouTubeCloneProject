import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Nav = (props) => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div>
            <ul>
                <li className="nav-title">
                    <Link to="/">
                        <h1>React YouTube</h1>
                    </Link>
                </li>
                <li className="nav-login-out-button">
                    {user ? (
                        <button className="nav-buttons" onClick={logoutUser}>
                            Logout
                        </button>
                    ) : (
                        <button
                            className="nav-buttons"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                    )}
                </li>
                <li className="nav-list-button">
                    {user ? (
                        <span></span>
                    ) : (
                        <button
                            className="nav-buttons"
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Nav;
