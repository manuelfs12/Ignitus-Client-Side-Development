import React, { Component } from 'react';
import intern from '../../images/intern.png';
import offer from '../../images/offer.png';
import expert from '../../images/expert.png';
import IntroducingIgnitus from '../IntroducingIgnitus/introducingignitus';

import './Introduction.css';
import './custom.scss';
import '../../App.css';

const Card= (props) => {
 return ( 
  <div className="shadow col-sm-3 m-auto mb-5 card">
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
        <IntroducingIgnitus/>
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