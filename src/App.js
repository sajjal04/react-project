import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Search from './pages/Search';
import Account from './pages/Account';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Blogs from './pages/Blogs';
import Outlets from './pages/Outlets';


const App = () => {
  return (
    <div>
      <BrowserRouter basename="/react-project">
      <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/Search' element= {<Search />} />
      <Route path='/Account' element= {<Account />} />
      <Route path='/Cart' element= {<Cart />} />
      <Route path='/About' element= {<About />} />
      <Route path='/Contact' element= {<Contact/>} />
      <Route path='/Faq' element= {<Faq/>} />
      <Route path='/Blogs' element= {<Blogs/>} />
      <Route path='/Outlets' element= {<Outlets/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App