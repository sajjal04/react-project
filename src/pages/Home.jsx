import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Perfumecards from '../components/Perfumecards'
const Home = () => {
  return (
   <div>
      <Header/>
      <Hero/>
      <br />
      <div class="container">
  <div class="row text-center">
    <div class="col-md-4 outlet-card">
      <img src="https://arfragrances.pk/cdn/shop/collections/Men-1536x1536.jpg?v=1671700776&width=750" alt="Men's Perfume" class="outlet-image"/>
      <div class="outlet-location">MEN</div>
    </div>
    
    <div class="col-md-4 outlet-card">
      <img src="https://arfragrances.pk/cdn/shop/collections/Women-Compressed.jpg?v=1672663362&width=750" alt="Women's Perfume" class="outlet-image"/>
      <div class="outlet-location">WOMEN</div>
    </div>

    <div class="col-md-4 outlet-card">
      <img src="https://arfragrances.pk/cdn/shop/collections/unuisex-1536x1536.jpg?v=1672663395&width=750" alt="Unisex Perfume" class="outlet-image"/>
      <div class="outlet-location">UNISEX</div>
    </div>
  </div>
</div>
     <Perfumecards/>
     <br />
      <Footer/>
    </div>
  )
}

export default Home
