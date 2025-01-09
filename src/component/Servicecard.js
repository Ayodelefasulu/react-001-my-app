import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card h-100">
        <div className="card-img">
          <img className="img-fluid" src={image} alt={title} />
        </div>
        <div className="card-body">
          <h4 className="card-header">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
