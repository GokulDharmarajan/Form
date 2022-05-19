import React from "react";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";
import Page3 from "./page/Page3";
import './form.css'

import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function All() {
  return (
<>
<Router>
    <div className="background">
    <div className="line">
    <Link to="/" className="line"><pre active={{color:"red"}}><b  className="Number" >1</b> Personal Details</pre></Link>
    </div>
    <div className="line">
    <Link to="/Page2" className="line"><pre><b className="Number">2</b> Company Details</pre></Link>
    </div>
    <div className="line">
    <Link to="/Page3" className="line"><pre><b className="Number">3</b> Email Verification</pre></Link>
    </div>
    </div>
    <Routes>
        <Route path="/" element={<Page1 />}/>
        <Route path="/Page2" element={<Page2 />}/>
        <Route path="/Page3" element={<Page3 />}/>
    </Routes>
</Router>
</>
  );
}

export default All;
