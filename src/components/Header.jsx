import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const Header = () => {
  return (
    <header>
      <div className='top bg-dark text-center py-2'>
        <p className="mb-0">
          AZADI SALE is Live! Avail Flat 14% off on checkout! <i className='fas fa-arrow-right'></i>
        </p>
      </div>
  
      <div className='logod container d-flex justify-content-between align-items-center py-3'>
        <div className='search'>
          <p>
            <Link to='/Search'>
              <i className="fa fa-search"></i>
            </Link>
          </p>
        </div>

        <div className='logo text-center'>
          <img 
            src="https://arfragrances.pk/cdn/shop/files/black.png?v=1723115800&width=50" 
            alt="logo" 
            className='img-fluid'
          />
        </div>

        <div className='sides d-flex'>
          <p className='mx-3'>
            <Link to='/Account'>
              <i className="fas fa-user-alt"></i>
            </Link>
          </p>
          <p>
            <Link to='/Cart'>
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </p>
        </div>
      </div>

      <NavBar/>
    </header>
  );
}

export default Header;
