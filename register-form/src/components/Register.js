import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

export default function Register() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [father_name, setFather_name] = useState("");
  const [mother_name, setMother_name] = useState("");
  const [dob, setDob] = useState("");
  const [c_code, setC_code] = useState("");
  const [contact, setContact] = useState(0);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState(0);

  const addStudent = () => {
    if(!fname|| !lname || !father_name || !mother_name || !dob || !c_code || !contact || !gender || !email || !password || !address1 || !city || !state || !pincode ){
      toast.error("Please provide value into each input field");
    }else{
    navigate("/Form",{state: {
      fname: fname,
      lname: lname,
      father_name: father_name,
      mother_name: mother_name,
      dob: dob,
      c_code: c_code,
      contact: contact,
      gender: gender,
      email: email,
      password: password,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      pincode: pincode}});
    Axios.post('http://localhost:5000/api', {
      fname: fname,
      lname: lname,
      father_name: father_name,
      mother_name: mother_name,
      dob: dob,
      c_code: c_code,
      contact: contact,
      gender: gender,
      email: email,
      password: password,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      pincode: pincode,
    }).then(() => {
      console.log("success");
      // navigate("/Form",{state: {
      //   fname: fname,
      //   lname: lname,
      //   father_name: father_name,
      //   mother_name: mother_name,
      //   dob: dob,
      //   c_code: c_code,
      //   contact: contact,
      //   gender: gender,
      //   email: email,
      //   password: password,
      //   address1: address1,
      //   address2: address2,
      //   city: city,
      //   state: state,
      //   pincode: pincode}});
    }).catch((err)=>toast.error(err.response.data));
    toast.success("Student Added Successfully");
  }
  };
      
  const navigate = useNavigate();

  return (

    <div>
      <form className="row m-5 pl-5 pr-5 pb-5">
        <p className="h1 text-center p-4">Registration form</p>
        <div className="col-md-6">
          <label htmlFor="First Name" className="form-label">First Name</label>
          <input type="text" name="fname" className="form-control" id="First Name" placeholder="First name" onChange={(event) => {
            setFname(event.target.value);
          }} required />
        </div>

        <div className="col-md-6">
          <label htmlFor="Last Name" className="form-label">Last Name</label>
          <input type="text" name="lname" className="form-control" id="Last Name" placeholder="Last Name" onChange={(event) => {
            setLname(event.target.value);
          }} required />
        </div>
        <div className="col-md-12">
          <label htmlFor="Father Name" className="form-label">Father Name</label>
          <input type="text" name="father_name" className="form-control" id="Father Name" placeholder='Father Name' onChange={(event) => {
            setFather_name(event.target.value);
          }} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="Mother Name" className="form-label">Mother Name</label>
          <input type="text" name="mother_name" className="form-control" id="Mother Name" placeholder='Mother Name' onChange={(event) => {
            setMother_name(event.target.value);
          }} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="dob" className="form-label">Date Of Birth</label>
          <input type="date" name="dob" className="form-control" id="dob" onChange={(event) => {
            setDob(event.target.value);
          }} required />
        </div>
        <div className="col-md-3">
          <label htmlFor="Country Code" className="form-label">Country Code</label>
          <select id="Country Code" name="country_code" className="form-select" onChange={(event) => {
            setC_code(event.target.value);
          }} required>
            <option value="NULL">Country Code</option>
            <option value="+91(India)">+91(India)</option>
            <option value="+61(Australia)">+61(Australia)</option>
            <option value="+880(Bangladesh)">+880(Bangladesh)</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="Contact No" className="form-label">Contact No</label>
          <input type="number" name="contact" className="form-control" id="Contact No" maxLength={10} placeholder='Ex-6295111477' onChange={(event) => {
            setContact(event.target.value);
          }} required />
        </div>
        <div className="radio col-md-5 mt-1">
          <label htmlFor="Gender" className="form-label">Gender</label><br />
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" onChange={(event) => {
              setGender(event.target.value);
            }} />
            <label className="form-check-label" htmlFor="inlineRadio1" >Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Female" onChange={(event) => {
              setGender(event.target.value);
            }} />
            <label className="form-check-label" htmlFor="inlineRadio1">Female</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Others" onChange={(event) => {
              setGender(event.target.value);
            }} />
            <label className="form-check-label" htmlFor="inlineRadio1">Others</label>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail" placeholder='Ex: ranadebsaha@yahoo.com' onChange={(event) => {
            setEmail(event.target.value);
          }} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" placeholder='Ex- Ab123@' onChange={(event) => {
            setPassword(event.target.value);
          }} required />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="House/Flat/Room No/Village" onChange={(event) => {
            setAddress1(event.target.value);
          }} required />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment/floor/Street/LandMark" onChange={(event) => {
            setAddress2(event.target.value);
          }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity" placeholder='Ex: Kolkata' onChange={(event) => {
            setCity(event.target.value);
          }} required />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select" onChange={(event) => {
            setState(event.target.value);
          }} required>
            <option value="NULL">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Odisha">Odisha</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="pincode" className="form-label">Pincode</label>
          <input type="number" inputMode='numeric' maxLength="6" className="form-control" id="pincode" onChange={(event) => {
            setPincode(event.target.value);
          }} required />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" required />
            <label className="form-check-label" htmlFor="gridCheck">
              I agree all terms and Conditions.
            </label>
          </div>
        </div>

        <div className="col-lg-2 d-flex align-items-end p-3">
          <button type="submit" className='btn btn-outline-success btn-block p-2 m-2' onClick={addStudent}>Save</button>
          <button type="submit" className="btn btn primary btn-outline-primary p-2 m-2" onClick={() => {
                navigate("/welcome");
              }}>Close</button>
              <button type="submit" className="btn btn-outline-secondary btn-block p-2 m-2" onClick={() => {
            navigate("/Login");
          }}>Admin Login</button>
        </div>
      </form>
      <div className="col-md-6 offset-md-3 row"><p>@Thank you to use Ranadeb Saha's Project</p></div>
    </div>
    
  )
}
