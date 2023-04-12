import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams,useNavigate  } from "react-router-dom";
import {toast} from "react-toastify";

export default function Update() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [father_name, setFather_name] = useState("");
  const [mother_name, setMother_name] = useState("");
  const [dob, setDob] = useState(0);
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
  const [id, setId] = useState(0);

  const params = useParams("");
  const navigate = useNavigate();

  const updateStudent = (id) => {
    if(!fname|| !lname || !father_name || !mother_name || !dob || !c_code || !contact || !gender || !email || !password || !address1 || !city || !state || !pincode ){
      toast.error("Please provide Updated value into each input field");
    }else{
    Axios.put("http://localhost:5000/update", {
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
      id: id,
    }).then(() => {
      console.log("success");
    }).catch((err)=>toast.error(err.response.data));
    toast.success("Student Details Updated Successfully");
    navigate("/admin");
  }
  };

  useEffect(() => {
    getStudentdetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function getStudentdetails() {
    fetch(`http://localhost:5000/student`).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        console.log(params);
        setFname(resp[params.id-1].Fname)
        setLname(resp[params.id - 1].Lname)
        setFather_name(resp[params.id - 1].Father_Name)
        setMother_name(resp[params.id - 1].Mother_Name)
        setDob(resp[params.id - 1].DOB)
        setC_code(resp[params.id - 1].Country_code)
        setContact(resp[params.id - 1].Contact)
        setGender(resp[params.id - 1].Gender)
        setEmail(resp[params.id - 1].Email)
        setPassword(resp[params.id - 1].Password)
        setAddress1(resp[params.id - 1].Address_1)
        setAddress2(resp[params.id - 1].Address_2)
        setCity(resp[params.id - 1].City)
        setState(resp[params.id - 1].State)
        setPincode(resp[params.id - 1].Pincode)
        setId(resp[params.id - 1].id)
      })
    })
  }



  return (
    <div>
      <form className="row m-5 pl-5 pr-5 pb-5">
        <p className="h1 text-center p-4">Update Form</p>
        <div className="col-md-6">
          <label htmlFor="First Name" className="form-label">First Name</label>
          <input type="text" name="fname" className="form-control" id="First Name" placeholder="First name" value={fname} onChange={(event) => {
            setFname(event.target.value);
          }} required />
        </div>

        <div className="col-md-6">
          <label htmlFor="Last Name" className="form-label">Last Name</label>
          <input type="text" name="lname" className="form-control" id="Last Name" placeholder="Last Name" value={lname} onChange={(event) => {
            setLname(event.target.value);
          }} required />
        </div>
        <div className="col-md-12">
          <label htmlFor="Father Name" className="form-label">Father Name</label>
          <input type="text" name="father_name" className="form-control" id="Father Name" value={father_name} onChange={(event) => {
            setFather_name(event.target.value);
          }} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="Mother Name" className="form-label">Mother Name</label>
          <input type="text" name="mother_name" className="form-control" id="Mother Name" value={mother_name} onChange={(event) => {
            setMother_name(event.target.value);
          }} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="dob" className="form-label">Date Of Birth</label>
          <input type="date" name="dob" className="form-control" id="dob" value={dob} onChange={(event) => {
            setDob(event.target.value);
          }} required />
        </div>
        <div className="col-md-3">
          <label htmlFor="Country Code" className="form-label">Country Code</label>
          <select id="Country Code" name="country_code" className="form-select" value={c_code} onChange={(event) => {
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
          <input type="tel" name="contact" className="form-control" id="Contact No" maxLength={10} placeholder='Ex- 1234567890' value={contact} onChange={(event) => {
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
          <input type="email" className="form-control" id="inputEmail" placeholder='example@gmail.com' value={email} onChange={(event) => {
            setEmail(event.target.value);
          }} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" placeholder='Ex- Ab123@' value={password} onChange={(event) => {
            setPassword(event.target.value);
          }} required />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="House/Flat/Room No/Village" value={address1} onChange={(event) => {
            setAddress1(event.target.value);
          }} required />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment/floor/Street/LandMark" value={address2} onChange={(event) => {
            setAddress2(event.target.value);
          }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity" placeholder='Ex: Kolkata' value={city} onChange={(event) => {
            setCity(event.target.value);
          }} required />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select" value={state} onChange={(event) => {
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
          <input type="text" inputMode='numeric' maxLength="6" className="form-control" id="pincode" value={pincode} onChange={(event) => {
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
        <div className="col-12 p-2">
          <button type="submit" className="btn btn-primary" onClick={() => { updateStudent(id) }}>Update</button>
        </div>
      </form>
      <div className="col-md-6 offset-md-3 row"><p>@Thank you to use Ranadeb Saha's Project</p></div>
    </div>
  )
}

