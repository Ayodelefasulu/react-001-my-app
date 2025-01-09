//import logo from './logo.svg';
//import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Carousel from './component/Carousel';
import AboutSection from './component/About';
import ServiceCard from './component/Servicecard';
import PortfolioItem from './component/Portfolioitem';

/*function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href="/">
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}
*/


const App = () => {
  const services = [
    { image: '/images/services-img-01.jpg', title: 'Analytics', description: 'Sapiente esse necessitatibus neque.' },
    { image: '/images/services-img-02.jpg', title: 'Applications', description: 'Sapiente esse necessitatibus neque.' },
    // Add other services here
  ];

  const portfolioItems = [
    { image: '/images/portfolio-img-01.jpg', title: 'Financial Sustainability' },
    { image: '/images/portfolio-img-02.jpg', title: 'Business Growth' },
    // Add other portfolio items here
  ];

  return (
    <div>
      <Carousel />
      <AboutSection />
      <div className="services-bar container">
        <h1 className="py-4">Our Best Services</h1>
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className="portfolio-main container">
        <h2>Our Portfolio</h2>
        <div className="row">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
