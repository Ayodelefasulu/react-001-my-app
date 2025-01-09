import React from 'react';

const PortfolioItem = ({ image, title }) => {
  return (
    <div className="col-lg-4 col-sm-6 pro-item portfolio-item">
      <div className="card h-100">
        <div className="card-img">
          <a href={image} data-fancybox="images">
            <img className="card-img-top" src={image} alt={title} />
            <div className="overlay">
              <i className="fas fa-arrows-alt"></i>
            </div>
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{title}</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
