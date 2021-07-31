
import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import CardPage from './CardPage';
import sdata from './CardData';


const allCategories = ['All', ...new Set(sdata.map((item)=>item.Category))];

const CardItem = () => {
     const [categories, SetCategories] = useState(allCategories);
    const [players, SetPlayers] = useState(sdata)
    
    const filter = (Category)=>{
      if(Category ==="All"){
          SetPlayers(sdata);
          return;
      }
      const filterData = sdata.filter((item)=>{
          return item.Category ===Category;
      })
      SetPlayers(filterData);
      console.log(filterData);
    }

    return (
            <>
            <Container className = "mb-2"> 
{/* 
            <div  style ={{width:"100%"}} className = "btnDiv py-4">
             <button className = "active" onClick = {()=>filter("All")}>All</button>
            <button className = "mx-2" onClick = {()=>filter("Football")}>FootBall</button>
            <button className = "" onClick = {()=>filter("Cricket")}>Cricket</button>
            <button className = "mx-2" onClick = {()=>filter("BasketBall")}>BasketBall</button>
            </div> */}
             
        
            
            <div className = "btnDiv py-4">
             {
                 categories.map((cat, i)=>{
                     return( 
                        
                     <button type = "button" onClick = {()=>filter(cat)} key = {i} >{cat}</button>
                    
                     )
                 })
             }
             </div>
             
            </Container>
           
            <CardPage player = {players}/>
           
             </>
       
       
            
        
    )
}

export default CardItem
