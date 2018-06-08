import React from 'react';
import ui from '../../images/ui1.png';
import './introducingignitus.css';

const IntroducingIgnitus =() =>{
  return (
    <div className = "container-fluid main">
      <div className = "row d-flex img-1">
        <img src={ui} alt="" className="col-sm-6 img-1" />
        <div className = "col-sm-6 text-center d-flex flex-column flex-sm-grow-1 ">
            <div className="mt-4 intro">Introducing</div>
            <div className="mt-2 ignitus-color img-1 ign">Ignitus</div>
            <div className="mt-4 ig-ur-re img-1">Ignite your Resume</div>
            <div className="mt-4 mb-3 sky img-1 px-5">'Skyrocketing your career by providing you the best global opportunities.'</div>
        </div>
      </div>
    </div>
    )
}

export default IntroducingIgnitus;


