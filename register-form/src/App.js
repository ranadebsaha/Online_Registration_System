import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Register from "./components/Register";
import Reportpage from "./components/Reportpage";
import Update from "./components/Update";
import Form from "./components/Form";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import pageNotFound from "./components/pageNotFound";

function App() {  
return (
    <div>
     <Router>
     <ToastContainer position="top-center" />
      <Routes>
        <Route exact path="/" element={<Register/>}/>
        <Route path="/admin" element={<Reportpage/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='*' element={<pageNotFound/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App
