import React from 'react'
import Home from './pages/Home'
import Announcement from './components/Announcement'
import Slider from './components/Slider'

export default function App() {
  return (
    <div>
      <Announcement/>
      <Home/>
      <Slider/>
    </div>
  )
}
