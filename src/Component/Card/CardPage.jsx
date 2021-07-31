
import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';


import CardExpandPage from './CardExpandPage';


const CardPage = ({player}) => {
  const [isOpen, SetIsOpen] = useState("");
  


 const buttonHandle = (e)=>{
   e.preventDefault();
   const toggle = e.target.getAttribute("data-index");
   if(isOpen===toggle){
     SetIsOpen("");
   }else{
    SetIsOpen(toggle);
   }
  
   console.log(toggle);

   

   

 }
return(
    <Container >
    <Row>
  
    {
        player.map((value,index)=>{
            return (
                <>
                <Col lg = {4}>
                <Card className = "cardPage mb-3" >
           <Card.Img src = {value.imgSrc} style = {{width:"100%", height:"200px"}} className = "imgSrc" />
           <Card.Body>
             <Card.Title className ="title">{value.Title}</Card.Title>
             <Card.Text className = "cardTitle">
              {value.name} <br/>
              {value.Attacker}<br/>
              
              {value.DOB}</Card.Text>
            
             
              
            
             {
               parseInt(isOpen)===index?<CardExpandPage  data = {value}/>:""
             }
            
             <button className = "btnIcon" onClick ={buttonHandle} data-index = {index}>{parseInt(isOpen)===index?"hide": "view" }</button>
            {
              console.log(isOpen)
            } 
           
           </Card.Body>
         </Card>
         </Col>
        
        
          
           
         
    
                </>
             )
        })
    }
    </Row>
    </Container>
)

    
}

export default CardPage;
