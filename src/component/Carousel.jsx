import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

/*const Carousel = () => {
  const slides = [
    {
      image: '/images/slider-01.jpg',
      title: 'Welcome to Peulz',
      description: 'A Great Theme For Business Consulting',
    },
    {
      image: '/images/slider-02.jpg',
      title: 'Best Consulting Services.',
      description: 'A Great Theme For Business Consulting',
    },
    {
      image: '/images/slider-03.jpg',
      title: 'Welcome to Peulz',
      description: 'A Great Theme For Business Consulting',
    },
  ];

  return (
    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        {slides.map((_, index) => (
          <li
            key={index}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
          />
        ))}
      </ol>
      <div className="carousel-inner" role="listbox">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            key={index}
          >
            <div className="carousel-caption d-none d-md-block">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};*/

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/slider-01.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/slider-02.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/slider-03.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};


export default Carousel;
