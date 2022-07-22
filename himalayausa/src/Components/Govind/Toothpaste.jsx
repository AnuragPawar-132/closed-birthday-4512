import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, Radio, RadioGroup, Stack, } from '@chakra-ui/react'
import React, { useState } from 'react';
import toothpaste from '../db.json'
import axios from 'axios';



const Toothpaste = () => {

const [data,setData ]=useState(toothpaste.toothpaste);



const handleClick = (value) => {
  if(value==="All"){
  console.log(toothpaste.toothpaste)
    setData(toothpaste.toothpaste)
  }

  let newProducts = toothpaste.toothpaste.filter((elem) => {
   return elem.Name.split("-")[1] === value;
  });
  // console.log(newProducts);
  setData(newProducts);
};

const handleChange=(elem)=>{
  axios.post(`https://my-himalayausa-project.herokuapp.com/cart`,{
    Name: elem.Name,
    Img:elem.Img,
    Price:elem.Price,
    count:1
  })
  .then((response)=>console.log(response.data))
  .catch((err)=>console.log(err))
}
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
    <Checkbox >Kids</Checkbox>
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

<RadioGroup defaultValue='1'>
  <Stack >
    <Radio value='1' onChange={()=>handleClick("All")}>All</Radio>
    <Radio value='2' onChange={() => handleClick("Cool Mint")}>Mint</Radio>
    <Radio value='3' onChange={()=>handleClick("Bubble Gum")}>Bubble Gum</Radio>
    <Radio value='4' onChange={()=>handleClick("Orange")}>Orange</Radio>
  </Stack>
</RadioGroup>

    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
</div>

  {/* --------Left Pannel */}     
     
     
      <div style={{display:"flex", marginLeft:"-23%" }}>
        {
          data.map((el)=>{
            return (
            <div >
             
              <img style={{height:"250px"}}src={el.Img}/>
              <h4>{el.Name}</h4>
              <h4>$:{el.Price}</h4>
              <Button onClick={()=>handleChange(el)}className="button hvr-grow">Add To Cart</Button>
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
