import React, { Component } from 'react';
import pic from '../../Images/1.png';
import './Team.css';


class Team extends Component{
	render()
	{
	    const Images_array = [pic,pic,pic,pic];

    let _html = Images_array.map(function (logo,key) {

        return(

           <div className="col-lg-3 col-md-4 col-sm-6 col-9 mx-auto  _imgs" key = {key}>
                  <img src={logo} width="150" alt={"logo"} /> 
           </div>

        )
      })
	return (
    <div>
  
          <div className = "col-sm-12 col-md-12 col-lg-12 col-xs-12 _align mt-4">
              <div className = "_contributor">Our Team</div>
              <div className = "_students_researchers" >We're led by a team who constanty questions, tinkers, and challenges to unlock great creativity around every turn. </div>
         </div>
        	<div className = "container">
         	 <div className = "row">
            	{_html}
         	 </div>
      		 </div>
    </div>

	);
	}
}
export default Team;