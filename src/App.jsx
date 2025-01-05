import { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import './App.css'
import MediaCard from './component/Cards'


function App() {

  const [theme,setTheme] = useState('light')
  
  return (
  <div className='container'>
    <Navbar/>
    {/* <MediaCard/> */}
  </div>
  )
}

export default App
