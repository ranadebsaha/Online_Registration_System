import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const adminLogin = () => {
        if (!email || !password) {
            toast.error("Please provide value into each input field");
        } else {
            navigate("/admin");
            toast.success("Admin Successfully Login");
            // .then(() => {
            //     navigate("/admin")
            //     console.log("success");
            // })
            // .catch((err) => toast.error(err.response.data));
        }
    };
    const navigate = useNavigate();
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 p-5">
                        <form className="border p-5">
                        <p className="h1 text-center p-4">Admin Login</p>
                            <div className="form-group">
                                <label for="inputEmail">Email</label>
                                    <input type="email" className="form-control" id="inputEmail" onChange={(event) => {
                                        setEmail(event.target.value);
                                    }} />
                            </div>
                            <div className="form-group">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" onChange={(event) => {
                                        setPassword(event.target.value);
                                    }} />
                                    <div className="form-check">
                                    <label className="mr-3"for="gridRadios1">
                                        Remember Password
                                    </label>
                                    <input type="checkbox" name="gridRadios" id="gridRadios1" value="option1" />
                                    </div>
                            </div>
                            <div className="d-flex align-items-center flex-column"><button type="submit" className="btn btn primary btn-outline-primary p-2 m-2" onClick={adminLogin}>Login</button></div>
                        </form >
                    </div>
                </div>
            </div>
            <div className="col-md-6 offset-md-3 row"><p>@Thank you to use Ranadeb Saha's Project</p></div>
        </div>
    )
};