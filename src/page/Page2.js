import React from "react";
import Page1 from "./Page1";
 import Page3 from "./Page3";
import{Link} from 'react-router-dom'
function Page2() {
  return (
    <div >
          <div className="heading">
          <h3>Add your Company Details</h3>
          <p>Lorem lpsum is simply dummy text of the printing and typesetting industry</p>
          </div>
      <div className="box">
          <div  className="content ">
             <input type="file" />
          </div>
          <div className="content">
          <h5>Company Name</h5>
              <input type="text" className="text" placeholder="Squash Apps Private Ltd"/>
          </div>
          <div className="content">
              <h5>Email id</h5>
              <input type="email" className="text" placeholder="rice.mason13@cyces.com"/>
          </div>
          <div className="content">
              <h5>Job Title</h5>
              <input type="text" className="text" placeholder="User Experience Designer"/>
          </div>
          <div className="content">
              <h5>Year of Experience</h5>
              <input type="text" className="text"/>
          </div>
          <div className="content">
              <pre><input type="checkbox"/> I accept the <span style={{color:"orangered"}}>Terms and Conditions</span></pre>
          </div>
          <div className="content1">         
              <Link to="/"className="text1"><button>Back</button></Link>
              <Link to="/Page3"className="text1"><button className="button1"onClick={()=>{alert("OTP SENDED")}} >Send OTP</button></Link> 
              </div>
      </div>
      </div>
  );
}

export default Page2;
