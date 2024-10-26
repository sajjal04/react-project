import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
const About = () => {
  return (
    <div>
      <Header/>
      <div className='about text-align-left justify-content-center '>
       <h1>About Us</h1>
       <br /> <br />
       <div className='text'>
       <p>Welcome to <u>AR Fragrances</u> - where luxury meets affordability, and every scent tells a story of elegance and economic empowerment.</p>
       <br />
       <h6>Our Mission:</h6>
       <br />
       <p>At AR Fragrances, our mission is clear: to bring you the essence of the world's finest designer fragrances at prices that won't break the bank. We believe that everyone deserves to indulge in the luxury of a signature scent without compromising on quality. Our commitment to affordability doesn't mean compromising on excellence – each fragrance we offer boasts a high oil concentration, ensuring a long-lasting impression that rivals the world's leading brands.</p>
       <br />
       <h6>Elevating Local Industries:</h6>
       <br />
       <p>Beyond the realm of exquisite scents, AR Fragrances is dedicated to contributing to the growth of our local industries and fostering economic development. We are proud to be a part of a movement that not only brings international fragrances to your doorstep but also supports local artisans and businesses. By choosing AR Fragrances, you're not just choosing a fragrance; you're choosing to be a part of the economic bloom in our community.</p>
       <br />
       <h6>Why AR Fragrances?</h6>
       <br />
       <h6>- Affordable Luxury:</h6>
       <p> Immerse yourself in the opulence of high-quality fragrances without the hefty price tag.</p>
       <br />
       <h6>- Long-lasting Impressions: </h6>
       <p>Our fragrances are meticulously crafted with a higher oil concentration, ensuring a lasting and memorable experience.</p>
        <br />
        <h6>- Local Empowerment:</h6>
        <p>With every purchase, you are contributing to the growth of local industries and playing a role in boosting our economy.</p>
        <br />
        <h6>Join Us on this Fragrance Journey:</h6>
        <br />
        <p>AR Fragrances invites you to embark on a fragrance journey where luxury, affordability, and local empowerment converge. Explore our extensive collection, discover scents that resonate with you, and become a part of our vision to redefine the fragrance experience. Thank you for choosing AR Fragrances – where every bottle tells a tale of sophistication and prosperity.</p>
       </div>
       <br /><br />
      </div>
     <Subscribe/>
      <br />
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default About
