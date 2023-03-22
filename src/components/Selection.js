import React , {useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import houseData from '../data/houseData';
import HouseList from './HouseList';


function Selection() {
    const [price,setPrice]=useState("");
    const [filter,setFilter]=useState(houseData);
    const handleChange=(e)=>{
      const filtervalue=e.target.value
      if(filtervalue===0)
      {
        setPrice(filtervalue)
        setFilter(houseData);
      }
      if(filtervalue===500)
      {
        setPrice(filtervalue)
        const FilterProduct=houseData.filter((item)=> item.price>=100 && item.price<500)
        setFilter(FilterProduct);
        
      }
      if(filtervalue===1000)
      {
        setPrice(filtervalue)
        const FilterProduct=houseData.filter((item)=> item.price>=500 && item.price<1000 )
        setFilter(FilterProduct);
        
      }
      if(filtervalue===1500)
      {
        setPrice(filtervalue)
        const FilterProduct=houseData.filter((item)=> item.price>=1000 && item.price<1500 )
        setFilter(FilterProduct);
        
      }
      if(filtervalue===2000)
      {
        setPrice(filtervalue)
        const FilterProduct=houseData.filter((item)=> item.price>=1500 && item.price<2000 )
        setFilter(FilterProduct);
        
      }
      
    }
    useEffect(()=>{
      window.scrollTo(0,0)
    })
    
  return (
    <div>
    <div>
      <Box sx={{ minWidth: 120 }}  style={{display:'flex',justifyContent:'end',marginRight:'5%' }}>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel >Price</InputLabel>
          <Select
            value={price}
            onChange={handleChange}
            autoWidth
            label="Price"
          >
            <MenuItem value={0}>
              <em>All Houses</em>
            </MenuItem>
            <MenuItem value={500}>$100-$500</MenuItem>
            <MenuItem value={1000}>$500-$1000</MenuItem>
            <MenuItem value={1500}>$1000-$1500</MenuItem>
            <MenuItem value={2000}>$1500-$2000</MenuItem>
          </Select>
        </FormControl>
        </Box>
      </div>
      <div>

        { filter.length===0 ? <h1 >No Houses are found for rent!</h1> : 
                  <HouseList data={filter}/>
              } 
      </div>
      </div>
      
              
      
  )
  
}




export default Selection