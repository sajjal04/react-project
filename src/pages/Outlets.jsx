import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Outlets = () => {
  return (
    <div className='container-fluid p-0'>
      <Header/>
      <div class="container">
  <h2 class="outlet-title">LAHORE OUTLETS</h2>
  <div class="row text-center">
  
    <div class="col-md-4 outlet-card">
      <img src="https://arfragrances.pk/cdn/shop/files/Lahore_2.jpg?v=1718886803&width=550" alt="Lahore Model Town"/>
      <div class="outlet-location">LAHORE - MODEL TOWN</div>
      <div class="get-directions"><a href="#">Get Directions →</a></div>
    </div>

    
    <div class="col-md-4 outlet-card">
      <img src="https://arfragrances.pk/cdn/shop/files/Lahore_2.jpg?v=1718886803&width=550" alt="Lahore Thokar"/>
      <div class="outlet-location">LAHORE - THOKAR</div>
      <div class="get-directions"><a href="#">Get Directions →</a></div>
    </div>

  
    <div class="col-md-4 outlet-card">
      <img src="https://arfragrances.pk/cdn/shop/files/Lahore_2.jpg?v=1718886803&width=550" alt="Lahore DHA"/>
      <div class="outlet-location">LAHORE - DHA</div>
      <div class="get-directions"><a href="#">Get Directions →</a></div>
    </div>
    </div>
</div>
    <br />
    <br />

    <div class="container">
  <h2 class="outlet-title">OUR OTHER OUTLETS</h2>
  <div class="row text-center">
    <div class="col-md-4 outlet-card">
      <img src="https://arfragrances.pk/cdn/shop/files/Islamabad_2.jpg?v=1718886714&width=550" alt="Lahore DHA"/>
      <div class="outlet-location">ISLAMABAD</div>
      <div class="get-directions"><a href="#">Get Directions →</a></div>
    </div>

    <div class="col-md-4 outlet-card">
      <img src="https://arfragrances.pk/cdn/shop/files/Bahawalpur_1.jpg?v=1718886761&width=550" alt="Lahore DHA"/>
      <div class="outlet-location">BAHAWALPUR</div>
      <div class="get-directions"><a href="#">Get Directions →</a></div>
    </div>


    <div class="col-md-4 outlet-card">
      <img src="https://arfragrances.pk/cdn/shop/files/tomb-of-shah-rukn-e-alam-2014-07-311E52C765-4B8C-2FE9-4618-44E8687C799A.jpg?v=1724026201&width=550" alt="Lahore DHA"/>
      <div class="outlet-location">MULTAN</div>
      <div class="get-directions"><a href="#">Get Directions →</a></div>
    </div>
</div>
</div>
<br /> <br />
<Footer/>
    </div>
  )
}

export default Outlets
