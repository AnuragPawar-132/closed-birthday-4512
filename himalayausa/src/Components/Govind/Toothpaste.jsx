import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, } from '@chakra-ui/react'
import React, { useState } from 'react';
import toothpaste from '../db.json'


const Toothpaste = () => {

const [count,setCount ]=useState(toothpaste.toothpaste)
console.log(count);

const handleClick = (value) => {
  let newProducts = count.filter((elem) => {
    console.log(elem.Name.split("-")[1])
    return elem.Name.split("-")[1]===value;

  });
  console.log(newProducts);
  setCount(newProducts);
  
};





  return (
    <div>
      
      <h1 style={{fontSize:"45px"}}>Kids Toothpaste</h1><br></br>
      <div style={{display:"flex"}}>
      
      
      {/* --------Left Pannel */}
<div >
 <Accordion allowToggle textAlign='left' width="300px" marginRight="10%" >
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box flex='1' textAlign='left' >
        Product Type
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={1}>
    <Checkbox defaultChecked>Kids</Checkbox>
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
</div>

<div >
 <Accordion allowToggle textAlign='left' width="300px" marginRight="10%" marginTop="25%">
  <AccordionItem  width="100%" marginLeft="-100%">
    <h2>
      <AccordionButton >
        <Box flex='1' textAlign='left' >
       Flavor
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={1}>
   
    <Checkbox onChange={()=>handleClick("All")} >All</Checkbox><br></br>
    <Checkbox onChange={()=>handleClick("Mint")}>Mint</Checkbox><br></br>
    <Checkbox onChange={()=>handleClick("Bubble Gum")}>Bubble Gum</Checkbox><br></br>
    <Checkbox  onChange={()=>handleClick("Orange")}>Orange</Checkbox><br></br>
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
</div>

  {/* --------Left Pannel */}     
     
     
      <div style={{display:"flex", marginLeft:"-23%" }}>
        {
          count.map((el)=>{
            return (
            <div >
             
              <img style={{height:"250px"}}src={el.Img}/>
              <h4>{el.Name}</h4>
              <h4>$:{el.Price}</h4>
              <button>Add To Cart</button>
            </div>
            )
          })
        }
      </div>
      <div></div>
    </div>
   
    </div>
  )
}

export default Toothpaste
