import "./Navbar.css";
import { Link } from "react-router";
import { useAuth } from "../contexts/authContext.jsx";
import axios from "axios";
const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const handleLogout = async () => {
        console.log("logout");
        try {
            const response = await axios.post(`/users/logout`);
            localStorage.removeItem("accessToken");
            console.log(response);
            logout();
        } catch (error) {
            localStorage.removeItem("accessToken");
            console.log("Error in logging out: ", error);
            logout();
        }
    };
    return (
        <>
            <div className="nav-cont">
                <div className="nav-logo">
                    <Link to="/">Spectra Movies</Link>
                </div>
                <div className="nav-links">
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Team">Team</Link>
                    </li>
                    <li>
                        <Link to="https://github.com/Neel-the-web-man/Spectra-backend">
                            Repo Link
                        </Link>
                    </li>
                    {isAuthenticated ? (
                        <li onClick={handleLogout}>
                            <Link to="/Login">Logout</Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
