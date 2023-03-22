import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import '../components/card.css'
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
function card({item}) {

  return (
    
        <Card sx={{ maxWidth: 345 }} className="card" >
        <CardMedia
          sx={{ height: 200 }}
          image={item.imgUrl}
          title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h4" component="div" color="blue">
            ${item.price}<span className='size'> /month</span>
          </Typography>
          
          <Typography gutterBottom variant="h5" component="div">
            <strong>{item.houseName}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.address}
          </Typography>
        </CardContent>
        <hr style={{color: "ghostwhite"}}/>
        <CardActions>
        <BedroomChildOutlinedIcon/>
        <Typography variant="span" >
        {item.beds} Beds
          </Typography>
          <BathtubOutlinedIcon/>
          <Typography variant="span" >
            {item.bathrooms} Bathrooms
          </Typography>
          <span style={{marginLeft:"12%",display:'flex'}}>
          <LayersOutlinedIcon/>
          <Typography variant="span" >
            {item.area}<sup>2</sup>
          </Typography>
          </span>
        </CardActions>
      </Card>
     
  )
}

export default card