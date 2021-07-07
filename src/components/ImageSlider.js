import React from 'react'
 
import Card from "./Card"
import Carousel from 'react-elastic-carousel';
export default function ImageSlider() {
  const breakPoints=[
    {width:1, itemsToShow:1},
    {width:300, itemsToShow:2},
    {width:500, itemsToShow:3},
    {width:1000, itemsToShow:4},
    {width:1200, itemsToShow:5}
  ]
  return (
   <>
   <div className="A_p">
     <Carousel breakPoints={breakPoints}>
      <Card  number="1"><h1 style={{textDecoration:"none",boxShadow:"none"}}>jcdbjxc</h1></Card>
      <Card number="2"/>
      <Card number="3"/>
      <Card number="4"/>
      <Card number="5"/>
      <Card number="6"/>
      <Card number="7"/>
      <Card number="8"/>
      <Card number="8"/>
      <Card number="8"/>
      <Card number="8"/>
     </Carousel>
    
    </div>
   </>
  );
}

 
