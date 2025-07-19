import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNavbar from './components/AppNavbar.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import About from './pages/About.jsx'
import Fashion from './pages/Fashion.jsx'
import Grocery from './pages/Grocery.jsx'
import Food from './pages/Food.jsx'
import Footer from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AppNavbar />
      <div className="App">
        <h1>JustAsk</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/food" element={<Food />} />
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
