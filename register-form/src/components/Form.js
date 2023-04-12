import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";

export default function Form() {

  const location = useLocation();
  // const componentPdf = useRef(null);
  // const getPdf = useReactToPrint({
  //   content: ()=> componentPdf.current,
  //   documentTitle : "Your Registration Form",
  //   onAfterPrint:()=> alert("Data Saved in PDF")
  // });
  // <ComponentToPrint ref={el => (this.componentRef = el)} />
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div>
        <div>
          <form className="row m-5 pl-5 pr-5 pb-5">
            <p className="h1 text-center p-4">Your form</p>
            <div className="col-md-6">
              <label htmlFor="First Name" className="form-label">First Name</label>
              <input type="text" name="fname" className="form-control" id="First Name" placeholder="First name" value={location.state.fname} readOnly />
            </div>

            <div className="col-md-6">
              <label htmlFor="Last Name" className="form-label">Last Name</label>
              <input type="text" name="lname" className="form-control" id="Last Name" placeholder="Last Name" value={location.state.lname} readOnly />
            </div>
            <div className="col-md-12">
              <label htmlFor="Father Name" className="form-label">Father Name</label>
              <input type="text" name="father_name" className="form-control" id="Father Name" placeholder='Father Name' value={location.state.father_name} readOnly />
            </div>
            <div className="col-md-6">
              <label htmlFor="Mother Name" className="form-label">Mother Name</label>
              <input type="text" name="mother_name" className="form-control" id="Mother Name" placeholder='Mother Name' value={location.state.mother_name} readOnly />
            </div>
            <div className="col-md-6">
              <label htmlFor="dob" className="form-label">Date Of Birth</label>
              <input type="text" name="dob" className="form-control" id="dob" value={location.state.dob} readOnly />
            </div>
            <div className="col-md-3">
              <label htmlFor="Country Code" className="form-label">Country Code</label>
              <select id="Country Code" name="country_code" className="form-select" value={location.state.c_code} readOnly>
                <option value="NULL">Country Code</option>
                <option value="+91(India)">+91(India)</option>
                <option value="+61(Australia)">+61(Australia)</option>
                <option value="+880(Bangladesh)">+880(Bangladesh)</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="Contact No" className="form-label">Contact No</label>
              <input type="number" name="contact" className="form-control" id="Contact No" maxLength={10} placeholder='Ex- 1234567890' value={location.state.contact} readOnly />
            </div>
            <div className="radio col-md-5 mt-1">
              <label htmlFor="Gender" className="form-label">Gender</label><br />
              <input type="text" name="gender" className="form-control" id="Gender" placeholder='Ex- 1234567890' value={location.state.gender} readOnly />
              {/* <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" readOnly />
                <label className="form-check-label" htmlFor="inlineRadio1" >Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Female" readOnly />
                <label className="form-check-label" htmlFor="inlineRadio1">Female</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Others" readOnly />
                <label className="form-check-label" htmlFor="inlineRadio1">Others</label>
              </div> */}
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder='example@gmail.com' value={location.state.email} readOnly />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword" placeholder='Ex- Ab123@' value={location.state.password} readOnly />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="House/Flat/Room No/Village" value={location.state.address1} readOnly />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment/floor/Street/LandMark" value={location.state.address2} readOnly />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" placeholder='Ex: Kolkata' value={location.state.city} readOnly />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select" value={location.state.state} readOnly>
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
              <input type="number" inputMode='numeric' maxLength="6" className="form-control" id="pincode" value={location.state.pincode} readOnly />
            </div>

            {/* <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" required />
            <label className="form-check-label" htmlFor="gridCheck">
              I agree all terms and Conditions.
            </label>
          </div>
        </div> */}
            <div className="col-lg-5 d-flex align-items-end p-3">
            {/* <button type="submit" className='btn btn-outline-success btn-block p-2 m-2' onClick={ getPdf }>Print</button> */}
              <button type="submit" className="btn btn primary btn-outline-primary p-2 m-2" onClick={() => {
                navigate("/");
              }}>Go to Registration Form</button>
              <button type="submit" className="btn btn primary btn-outline-primary p-2 m-2" onClick={() => {
                navigate("/welcome");
              }}>Close</button>
            </div>
          </form>
        </div>
        <div className="col-md-6 offset-md-3 row"><p>@Thank you to use Ranadeb Saha's Project</p></div>
      </div>
      </React.Fragment>
  );
  };