import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Nav = (props) => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">
                        <h1>React YouTube</h1>
                    </Link>
                </li>
                <li>
                    {user ? (
                        <button onClick={logoutUser}>Logout</button>
                    ) : (
                        <button onClick={() => navigate("/login")}>
                            Login
                        </button>
                    )}
                </li>
                <li>
                    {user ? (
                        <span></span>
                    ) : (
                        <button onClick={() => navigate("/register")}>
                            Register
                        </button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Nav;
