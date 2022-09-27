import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Categories from '../components/StorePage/Categories';
import Products from '../components/StorePage/PopProducts';
import Slider from '../components/StorePage/Slider';
import axios from 'axios'




const StorePage = () => {
  const[isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const toggle = ()=> {
      setIsOpen(!isOpen)
  }

  useEffect(() => {
    axios.post('http://localhost:4000/api/item/')
    .then(res=> {
     console.log(res)
     setData(res.data)
     setLoading(false)
    })
    .catch(err => {
     console.log (err)
    })
    console.log(data)
   }, []);

  return (
    <div>
      {loading? 

      ''
      :
      <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Categories data = {data}/>
      <Slider data= {data}/>
      <Products data = {data}/>
      
     
      </div>

      
  }
  </div>
  
  )
}

export default StorePage