/* eslint-disable no-unused-vars */
// import React from "react";
import { useState } from "react";
import "./Signin.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Signin = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            toast.error("All fields are required");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(
                `http://localhost:8000/users/register`,
                formData
            );
            // console.log(response);
            toast.success("Form has been submitted");
        } catch (error) {
            if (error.status == 409) {
                toast.error("User already exists");
                return;
            }
            toast.error("Error in submitting form");
        }
        setLoading(false);
    };

    return (
        <div className="signin-body">
            <div className="signin-cont">
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
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="signin-form-div">
                        <div className="signin-username-label">Username: </div>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            autoComplete="off"
                            required
                            onChange={handleChange}
                            value={formData.username}
                        />
                    </div>
                    <div className="signin-form-div">
                        <div className="signin-email-label">Email: </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            autoComplete="off"
                            required
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <div className="signin-form-div">
                        <div className="signin-password-label">Password: </div>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            autoComplete="off"
                            required
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </div>
                    <button className="signinformsubmit" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signin;
