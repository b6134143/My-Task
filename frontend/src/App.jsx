import { useState, react } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Menu, Dropdown, Space, AutoComplete, Input, Switch } from 'antd';
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Content from './component/Content'
import CreateProduct from './component/CreateProduct'
import Home from './pages/Home';
import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Information1 from './component/Information1';
import Api1 from './pages/Api1';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/About' element={<About />} />
        <Route path='/CreateProduct' element={<CreateProduct />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Information1' element={<Information1 />} />
        <Route path='/Api1/:id' element={<Api1 />} />
      </Routes>

      <Footer/>

    </div>
  )
}

export default App