import React from 'react'
import Hero from '../components/Hero'
const Search = () => {
  return (
    <div>
        <div className='top'>
           <p> AZADI SALE is Live! Avail Flat 14% off on checkout! <i class='fas fa-arrow-right'></i> </p>
        </div>
        <div className='search-container'>
            <input type="text" placeholder='Search' className='search-input' />
            <button className='search-btn'>
                <i className='fas fa-search'></i>
            </button>
        </div>
      <Hero/>
    </div>
  )
}

export default Search
