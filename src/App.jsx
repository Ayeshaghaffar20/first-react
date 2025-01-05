import { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import './App.css'
// import { Card } from '@mui/material'
import Cards from '../src/component/Cards' 

import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router";


function App() {

  const [theme,setTheme] = useState('light')
  

  let [data,setData] = useState([]);

  useEffect(() => {
 
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((Response)=> Response.json())
    .then((json)=> setData(json))
  }, [])
 
  return (
  <div className='appContainer'>
  
    <Navbar/>
<<<<<<< Updated upstream
    {/* <MediaCard/> */}
=======
    <div className='row col-md-4 my-3 '  style={{width:'100%'}}>
      <Row>  
        { data.map( (data)=>   <Cards title={data.title} description={data.body}/>)}
      </Row>
    `</div>
   
    

    
>>>>>>> Stashed changes
  </div>
  )
}

export default App
