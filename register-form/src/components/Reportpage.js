import React,{useState} from 'react'
import {Link} from "react-router-dom";
import Axios from "axios";
import {toast} from "react-toastify"

function Reportpage() {
  const[data,setData]=useState([]);

  const getStudent= () => {
    Axios.get('http://localhost:5000/student',{
    }).then((response)=>{
      setData(response.data);
    });
  };
  const deleteStudent=(id)=>{
    if(window.confirm("Are you sure that you wanted to delete that Student ?")){
      Axios.delete(`http://localhost:5000/remove/${id}`);
      toast.success("Student Deleted Successfully");
      setTimeout(()=>getStudent(),500);
    }
    
  }
  
  return(
    getStudent(),
    <div>
        
<table className="table m-4">
  <thead>
    <tr className="m-5">
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact No</th>
    </tr>
  </thead>
  <tbody className="m-3">
    { data.map((item, index) => {
    return(
      <tr key={item.id}>
        <th scope="row">{index+1}</th>
        <td>{item.Fname}</td>
        <td>{item.Lname}</td>
        <td>{item.Email}</td>
        <td>{item.Contact}</td>
        <td>
        {/* item.id */}
          <Link to={`/update/${index+1}`}>
            <button className="btn btn-warning">Update</button>
          </Link>
        </td>
        <td>
        <button type="submit" className="btn btn-danger" onClick={() => { deleteStudent(item.id) }}>Delete</button>
        </td>
      </tr> 
    )
     })}
    </tbody>
    </table>
    <div className="col-md-6 offset-md-3 row"><p>@Thank you to use Ranadeb Saha's Project</p></div>
    </div>
  );
};

export default Reportpage;