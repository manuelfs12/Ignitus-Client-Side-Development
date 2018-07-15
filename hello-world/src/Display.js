import React, { Component } from 'react';
import pic from './1.png';
import './Display.css';

class Display extends Component{
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
        	<div className = "container">
         	 <div className = "row">
            	{_html}
         	 </div>
      		 </div>
       </div>
	);
	}
}
export default Display;