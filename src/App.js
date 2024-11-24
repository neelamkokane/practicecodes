import React from 'react'
import Home from './pages/Home'
import Announcement from './components/Announcement'
import Slider from './components/Slider'
import Categories from './components/Categories'
import Products from './components/Products'

export default function App() {
  return (
    <div>
      <Announcement/>
      <Home/>
      <Slider/>
      <Categories />
      <Products />
    </div>
  )
}
