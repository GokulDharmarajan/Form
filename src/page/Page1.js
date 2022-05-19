import React from "react";
import '../form.css'
import Page2 from "./Page2";
import{Link} from 'react-router-dom'
function Page1() {
  return (
      <div >
          <div className="heading">
          <h3>Add your Personal Details</h3>
          <p>Lorem lpsum is simply dummy text of the printing and typesetting industry</p>
          </div>
      <div className="box">
          <div  className="content">
              <h5>Full Name</h5>
              <input type="text"  className="text" placeholder="Enter your Name"/>
          </div>
          <div className="content">
              <h5>Gender</h5>
              <button>Male</button>
              <button>Female</button>
              <button>Other</button>
          </div>
          <div className="content">
              <h5>Country</h5>
              <input type="text" className="text" placeholder="India"/>
          </div>
          <div className="content">
              <h5>State</h5>
              <input type="text" className="text" placeholder="Tamil Nadu"/>
          </div>
          <div className="content">
              <h5>Phone</h5>
              <input type="number" className="text" placeholder="+91 9953457246"/>
          </div>
          <div className="content">
          <Link to="/Page2"className="text1"><button className="button">Next</button></Link>
                <p className="content">Already have an account?<span style={{color:"orangered"}}>Log in</span> </p>
          </div>
      </div>
      </div>

  );
}

export default Page1;
