


import React, { Component } from 'react';

const Card= (props) => {
    return (
        <div className="col-lg-3 col-sm-5 mb-5 col-6 card-shadow card m-4">
        <h5 className = "card-title text-center text-dark font-weight-bold mt-3">{props.title}</h5>
            <div className="d-flex justify-content-center m-auto">
                <img className = "card-img-top mt-2" alt="card" src={props.image} />
			</div>
            <p className = "card-text text-center p-4">{props.description}</p>
        </div>
    );
}

export default Card;