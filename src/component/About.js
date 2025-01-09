import React from 'react';

const AboutSection = () => {
  return (
    <div className="about-main container">
      <div className="row">
        <div className="col-lg-6">
          <h2>Welcome to Peulz</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id
            reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia
            dolorum ducimus unde.
          </p>
          <h5>Our smart approach</h5>
          <ul>
            <li>Sed at tellus eu quam posuere mattis.</li>
            <li>Phasellus quis erat et enim laoreet posuere ac porttitor ipsum.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid rounded" src="/images/about-img.jpg" alt="About" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
