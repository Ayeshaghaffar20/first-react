<<<<<<< Updated upstream
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import cardImage from '../../assets/images/cardImage.jpg'


export default function MediaCard() {
=======
import React from 'react'
import CardImages from '../assets/images/cardImage.jpg'
// import { images } from '../constrain' 
const Cards = ({title,description}) => {
>>>>>>> Stashed changes
  return (
   <div>

     <div className="card mb-3" style={{maxWidth:"540px"}}>
     {/* <img src={CardImages} alt="" className='logo' /> */}
  <div className="row g-0">
    <div className="col-md-4">
      <img src={CardImages} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
   </div>
  )
}

export default Cards
