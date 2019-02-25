import React, { Component } from 'react';

const Card = (props) => (
   
    <div className="card" style={{width: '18rem', padding: '25px'}}>
        <img src={props.image_url} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
    </div>
    
);

export default Card;