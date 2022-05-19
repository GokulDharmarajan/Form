import React from "react";
import Page1 from "./Page1";
import{Link} from 'react-router-dom'
function Page3() {
  return (
    <div >
          <div className="heading">
          <h3>Enter Your OTP</h3>
          <p>For your security,we need to verify your identity.We sent a 5-digit</p>
          <p>Code to <b>name@domain.com</b>Please enter it below.</p>
          </div>
      <div className="box">
          <div  className="contet">
            <h5>Enter Your Code</h5>
             <input type="text"/>
             <input type="text"/>
             <input type="text"/>
             <input type="text"/>
             <input type="text"/>
          </div>
          <div className="content1">         
              <Link to="/Page2"className="text1"><button>Back</button></Link>
              <Link to="/"className="text1"><button className="button1"onClick={()=>{alert("Verify Successfully")}} >Verify</button>  </Link>
      </div>
      <p className="content">Don't receive the email? Check your filter  email </p>
      <p className="heading">from  <span style={{color:"orangered"}}> <b>name@domain.com</b></span></p>
      </div>
      </div>
  );
}

export default Page3;
