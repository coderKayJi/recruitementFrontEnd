import React from 'react'
import Header from '../header'
import {  Route, Routes} from "react-router-dom";
import Home from '../aboutUs'
import Contact from '../contactUs'
import Openings from '../openings'

const basicLayout = () => {
  return (
    <div>
    <Header />
    <Routes>
    <Route default path="/" exact element={<Home/>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/apply" element={<Openings />}  />
  </Routes>
 
    </div>
  )
}

export default basicLayout