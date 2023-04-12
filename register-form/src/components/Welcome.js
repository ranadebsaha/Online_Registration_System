import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Welcome(){
    const navigate = useNavigate();
    return(
        <div>
            <div className="d-flex align-items-center flex-column">
             <h1>Thank You to Visit Our Website</h1>
             <h2>If you Register Yourself on our website then close This tab</h2>
             <h2>Either You Register Immediately and Get More Information.</h2>
             <h3>Have a Great Day</h3>
        </div>
        <div className="d-flex align-items-center flex-column"><button type="submit" className="btn btn primary btn-outline-primary p-2 m-2" onClick={() => {
                navigate("/");
              }}>Registration Form</button></div>
              <div className="col-md-6 offset-md-3 row"><p>@Thank you to use Ranadeb Saha's Project</p></div>
        </div>
    )
};