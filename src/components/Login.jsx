/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext.jsx";
const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const { isAuthenticated, user, login, logout } = useAuth();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            toast.error("All fields are required");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`/users/Login`, formData);
            const accessToken = response?.data?.data?.accessToken;
            const user = response?.data?.data?.user;
            localStorage.setItem("accessToken", accessToken);
            login(accessToken, user);
            toast.success("Succefully Logged In");
            setTimeout(() => navigate("/"), 1000);
            setFormData({
                username: "",
                password: "",
            });
        } catch (error) {
            console.log(error);
            setFormData({
                username: "",
                password: "",
            });
            toast.error("Error in Logging In");
        }
        setLoading(false);
    };

    // // Check token expiration and logout if expired
    // useEffect(() => {
    //   const checkTokenExpiration = async () => {

    //     try {
    //     const response=await axios.get(`http://localhost:8000/users/getCurrentUser`);
    //     console.log(response);
    //     //user is logged in
    //   } catch (error) {
    //     console.log(error);
    //     if(error.status==401){
    //       navigate("/Login");
    //       //dont allow user to access site until he logs in
    //     }else if(error.status==402){
    //       try {
    //         const response=await axios.post(`http://localhost:8000/users/refreshAcessToken`);
    //         console.log(response);
    //         //user is logged in
    //       } catch (error) {
    //         //user must login since he dont have any refresh token or its expired or used
    //         console.log(error);
    //         if(error.status==401){
    //           navigate("/Login")
    //         }
    //       }
    //       }
    //     }

    //   };

    //   // Check token expiration every 10 minute
    //   const interval = setInterval(checkTokenExpiration, 150000);
    //   return () => clearInterval(interval);
    // }, [navigate]);

    return (
        <div className="login-body">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
            <div className="login-cont">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login-form-div">
                        <div className="login-username-label">Username: </div>
                        <input
                            type="text"
                            placeholder="username"
                            required
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="login-form-div">
                        <div className="login-password-label">Password: </div>
                        <input
                            type="text"
                            placeholder="password"
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="loginformsubmit">
                        Submit
                    </button>
                    <p>
                        Haven&apos;t Signed Up?...{" "}
                        <Link to="/Signup">SignUp</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
