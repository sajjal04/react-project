import React from 'react'
const Footer = () => {
  return (
    <footer>
        <hr />
    <div className='footer-container'>
        <div className='footer-section contact-details'>
            <h3>CONTACT DETAILS</h3>
            <ul>
            <p><a href="#">+923330499831</a></p>
            <p><a href="#">✉️ arfragrancespk@gmail.com</a></p>
            <p><a href="#">Office#1 , 782 G4 , Johar town lahore</a></p>
            <p><a href="#">Islamabad Outlet: Metro Islamabad Parking i11/4</a></p>
            <p><a href="#">Islamabad Store Map Location</a></p>
            <p><a href="#">Bahawalpur Outlet: SS Tower, Beside Imtiaz Super Store, Noor Mahal Road</a></p>
            <p><a href="#">Bahawalpur Outlet Map Location</a></p>
            </ul>
        </div>
        <div className='footer-section quick-links'>
            <h3>QUICK LINKS</h3>
            <p><a href="#Contact">Contact Us</a></p>
            <p><a href="#Blog">Blogs</a></p>
            <p><a href="#FAQ">FAQS</a></p>
            <p><a href="#About">About Us</a></p>
            <p><a href="#">Own A Franchise</a></p>
            <p><a href="#">Terms Of Services</a></p>
            <p><a href="#">Shipping Policy</a></p>
            <p><a href="#">Refund Policy</a></p>
            <p><a href="#">Privacy Policy</a></p>
        </div>
        <div className='footer-section footer-logo'>
            <img src="https://arfragrances.pk/cdn/shop/files/logo_black.png?v=1649803137&width=140" alt="logo"/>
        </div>
    </div>   
        <div className='accounts'>
            <a href="#"><i className='fab fa-facebook'></i></a>
            <a href="#"><i className='fab fa-instagram'></i></a>
        </div>
        <div className='footer-last'>
            <p>&copy;2024, arrehmanfragrances Designed & Developed By <a href="#">Ecommerce Xpert</a></p>
        </div>
</footer>
  );
}

export default Footer
