import React, { useEffect, useState } from "react";
import { Stack, HStack, VStack, Text, Box, Image, Button, Spacer, Link, Input } from '@chakra-ui/react';
import styles from "./Cart.module.css";
import axios from "axios";

const Cart=()=>{

    const [cartData, setCartData]= useState([])

    const fetchCartFunction=()=>{
        axios.get(`https://my-himalayausa-project.herokuapp.com/cart`)
        .then((res)=>setCartData(res.data))
        .catch((err)=>console.log(err))
    }

    const handleCartItemDelete=(id)=>{
        axios.delete(`https://my-himalayausa-project.herokuapp.com/cart/${id}`)
    }

    const handleChangeQuantity=(x, id, y)=>{
        
            axios.patch(`https://my-himalayausa-project.herokuapp.com/cart/${id}`,{
            count : y + x
        })
        // .then((res)=>setCartData(res.data))
        // .catch((err)=>console.log(err))
        fetchCartFunction()
    }

    let total_price = 0;
        
        for(let i=0; i<cartData.length; i++){
            total_price+= (cartData[i].price * cartData[i].count);
        }

    useEffect(()=>{
        fetchCartFunction()
    },[cartData])

    return (
        <VStack padding="2%" w="100%" >
            <Box>
                <Text fontSize="4xl" fontWeight="semibold" >Shopping Cart</Text>
            </Box>
            <VStack w="100%" padding="3%"  >
                {
                    cartData.length>0 && cartData.map(({Img, Name, id, price, count})=>{
                        return(
                            <div className={styles.cartBox_any} >
                                <Button color="grey" bg="white" onClick={()=>handleCartItemDelete(id)} >🗑</Button>

                                <Box bg="#f6f6f6" ><Image src={Img} /></Box>

                                <Box fontSize="2xl" textAlign="left" ><Text>{Name}</Text></Box>

                                <Box><Text fontSize="2xl" color="grey" >$ {price}</Text></Box>

                                <HStack>
                                    <Button onClick={()=>{if(count>1){handleChangeQuantity(-1, id, count)}}} >-</Button>
                                    <Text fontSize="2xl" color="grey">{count}</Text>
                                    <Button onClick={()=>{if(count<4){handleChangeQuantity(+1, id, count)}}} >+</Button>
                                </HStack>

                                <Box><Text fontSize="2xl" color="grey" >$ {(price * count).toFixed(2)}</Text></Box>
                            </div>
                        )
                    })
                }
            </VStack>
            <HStack bg="#f6f6f6" w="100%" padding="3%" justifyContent="space-between" >
                <Box><Text fontSize="2xl" >Total Items : {cartData.length}</Text></Box>
                <Box><Text fontSize="2xl" >Total Amount: $ {total_price.toFixed(2)}</Text></Box>
                <Button size="lg" bg="#0D362B" color="white" >Proceed To Checkout</Button>
            </HStack>
        </VStack>
    )
}
export default Cart