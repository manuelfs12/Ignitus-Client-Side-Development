import React, { Component } from 'react';
import ui from '../../images/ui1.png';
import intern from '../../images/intern.png';
import offer from '../../images/offer.png';
import expert from '../../images/expert.png';

import './Introduction.css';
import '../../App.css';

const Card= (props) => {
 return ( 
  <div className="col-sm-3 m-auto mb-5 card shadow">
    <img className="card-img-top img-fluid  mt-2" alt="card-image" src={props.image} />
    <h5 className="card-title text-center text-dark font-weight-bold mt-3">{props.title}</h5>
    <p className = "card-text text-center p-4">{props.description}</p>
  </div>
  );
}


export default class App extends Component {
  render() {
    const data =[
      {
        image: intern,
        title: 'Internships',
        description: "Top quality 'Ignitus-Exclusive' internships and freelance work with professors,researchers,companies and professionals from selected desinations" 
      },
      { 
        image: offer,
        title:'Courses',
        description:"Unique, well researched and goal-oriented courses designed to boost relevant skill acquisition with minimal effort and time." 
      },
      {
        image:expert,
        title:'Experts Community',
        description:"Guidance from an unparalleled network of professors,experts and industry professionals supervising internal projects with selected students" 
      }
    ];
    return (
      <div>
        <div className="container-fluid">
         <div className="main row">
            <div className="col-sm-1"></div>
            <div className="col-sm-5 " >
              <img src={ui} alt="banner-image" className="mt-5 pt-2 px-2 float-left img-fluid"/>
            </div>
            <div className="col-sm-5 container ">
              <h1 className="text-center mt-5 display-1 font-weight-normal sh" >Introducing</h1>
              <h1 className="text-center mb-5 pt-3 display-2 font-weight-bold ignitus-color">Ignitus</h1>
              <h2 className=" text-center mt-5 pt-3  mb-5 font-weight-bold " style={{letterSpacing: "1px"}}>Ignite your Resume</h2>
              <h4 className=" text-center pt-2 mt-3 mx-5" style={{letterSpacing: "1px"}}>'Skyrocketing your career by providing you the best global opportunities.'</h4>
            </div>
            <div className="col-sm-1"></div>
        </div>
        </div>
        <div className="bg-white container">
          <div><h1 className="text-center my-5 font-weight-bold ignitus-color">What you will find on Ignitus ?</h1></div>
          <div className=" row">
            <Card image={data[0].image} title={data[0].title} description={data[0].description}/>
            <Card image={data[1].image} title={data[1].title} description={data[1].description}/>
            <Card image={data[2].image} title={data[2].title} description={data[2].description}/>
          </div>
        </div>
      </div>
      );
  }
}
     


    // <div className="">
    //      <img src=""/>
            // 
 
    //      </div>