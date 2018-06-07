import React from 'react';
import ui from '../../images/ui1.png';
import './introducingignitus.css';

const IntroducingIgnitus =() =>{
  return (
       <div className="container-fluid">
         <div className="main row">
            <div className="col-sm-1"></div>
            <div className="col-sm-5 " >
              <img src={ui} alt="" className="mt-5 pt-2 px-2 float-left img-fluid"/>
            </div>
            <div className="col-sm-5 container ">
              <h1 className="text-center mt-5 display-1 font-weight-normal sh" >Introducing</h1>
              <h1 className="text-center mb-5 pt-3 display-2 font-weight-bold ignitus-color sh">Ignitus</h1>
              <h2 className=" text-center mt-5 pt-3  mb-5 font-weight-bold " style={{letterSpacing: "1px"}}>Ignite your Resume</h2>
              <h4 className=" text-center pt-2 mt-3 mx-5" style={{letterSpacing: "1px"}}>'Skyrocketing your career by providing you the best global opportunities.'</h4>
            </div>
            <div className="col-sm-1"></div>
        </div>
        </div>
    )
}

export default IntroducingIgnitus;