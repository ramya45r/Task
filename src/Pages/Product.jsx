import {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {product} from '../data2'
import axios from 'axios';
import Sidebar from '../components/Sidebar';

export default function Product() {
    const [items,setItems]=useState(product)
   
  
  return (
    <>
     
    <Card sx={{display:'flex',justifyContent:'space-around',marginTop:10 }}>
    <Sidebar/>
      {items.map((item) => (
        <div style={{ maxWidth: 345}}>
         <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.product_images[0].product_image}
      />
       
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.product_name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         {item.product_category_name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        {item.product_brand_name}
        </Typography>
        
        <Typography gutterBottom variant="h6" component="div">
         {item.product_model_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.desc}
        </Typography>
      </CardContent>
        </div>
     
      ))}
    </Card>
  
    </>
  )
}
