import React, { Component } from 'react';
import './get_started_component.css';

class GetStarted extends Component {

  render() {

    return (

        <div className = "bg-primary _align container-fluid">
              <div className = "col-8 pt-5 _align _started text-white" > Join thousands of students and researchers
              already using Ignitus to share their knowledge, work together, and get amazing opportunites.</div>
              <a href="/signup" className="btn btn-lg _button text-uppercase" role="button">Sign Up</a>
         </div>

    )
  }
}

export default GetStarted;