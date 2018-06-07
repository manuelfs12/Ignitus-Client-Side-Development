import React from 'react';
import ui from '../../images/ui1.png';
import './introducingignitus.css';

const IntroducingIgnitus =() =>{
  return (
    <div className = "container-fluid main">
      <div className = "row d-flex img-1">
        <img src={ui} alt="" className="col-sm-6 d-none d-sm-block img-1" />
        <div className = "col-sm-6 text-center d-flex flex-column flex-sm-grow-1 ">
            <h1 className="mt-5 intro">Introducing</h1>
            <h2 className="mt-4 ignitus-color img-1 ign">Ignitus</h2>
            <h4 className="mt-4 ig-ur-re img-1">Ignite your Resume</h4>
            <h5 className="mt-4 mb-3 img-1 px-5">'Skyrocketing your career by providing you the best global opportunities.'</h5>
        </div>
      </div>
    </div>
    )
}

export default IntroducingIgnitus;


/*

<div className="container-fluid">
         <div className="main row">
            <div className="col-sm-1"></div>
            <div className="col-sm-5 " >
              <img src={ui} alt="" className="mt-5 pt-2 px-2 float-left img-fluid"/>
            </div>
            <div className="col-sm-5 container ">
              <div className=" mt-5 display-1 font-weight-normal sh" >Introducing</div>
              <div className=" mb-5 pt-3 display-2 font-weight-bold ignitus-color sh">Ignitus</div>
              <div className="  mt-5 pt-3  mb-5 font-weight-bold " style={{letterSpacing: "1px"}}>Ignite your Resume</div>
              <div className="  pt-2 mt-3 mx-5" style={{letterSpacing: "1px"}}>'Skyrocketing your career by providing you the best global opportunities.'</div>
            </div>
            <div className="col-sm-1"></div>
        </div>
        </div>
*/