import React from 'react';
import ui from '../../images/ui1.png';
import './introducingignitus.css';

const IntroducingIgnitus =() =>{
  return (
    <div className = "container-fluid main">
      <div className = "row d-flex img-1">
        <img src={ui} alt="" className="col-sm-6" />
        <div className = "col-sm-6 mt-1 text-center d-flex flex-column flex-sm-grow-1 ">
            <h1 className="mt-4 intro">Introducing</h1>
            <div className=" ignitus-color ign">Ignitus</div>
            <h4 className="mt-4 mb-1 ig-ur-re ">Ignite your Resume</h4>
            <h5 className="mt-4 pt-md-2 sky px-md-5">'Skyrocketing your career by providing you the best global opportunities.'</h5>
        </div>
      </div>
    </div>
    )
}

export default IntroducingIgnitus;


