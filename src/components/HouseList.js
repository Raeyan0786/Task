import React from 'react'
import '../App.css'
import Card from '../components/card'
import houseData from '../data/houseData'

function HouseList({data}) {
  return (
    <div className="App">
      {data?.map((item,index)=>
      <Card  item={item} key={index}/>
      )
}
    </div>
  )
}

export default HouseList