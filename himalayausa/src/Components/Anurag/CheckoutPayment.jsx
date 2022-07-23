import React, { useEffect, useState } from "react";
import { Stack, HStack, VStack, Text, Box, Image, Button, Spacer, Link, Input } from '@chakra-ui/react';
import styles from "./CheckoutPayment.module.css"
import axios from "axios"

const CheckoutPayment=()=>{

    const [cartData, setCartData] = useState([])
    const [promoText, setPromoText]= useState("");

    let total_price = 0;
    let promo_price = 0;
        
        for(let i=0; i<cartData.length; i++){
            total_price+= (cartData[i].price * cartData[i].count);
        }
     

    const getchMineCart=()=>{
         axios.get(`https://my-himalayausa-project.herokuapp.com/cart`)
         .then((res)=>setCartData(res.data))
         .catch((err)=>console.log(err))
    }

    
    useEffect(()=>{
        getchMineCart();
    }, [total_price])

    if(promoText === "NATURE20"){
        promo_price= total_price * 0.2
    }

    console.log(promoText)

    return (
        <VStack w="100%" spacing="5%" >

            <VStack className={styles.cartBox_any}  >
                {
                    cartData.map(({id, price, Name, Img, count})=>{
                        return <HStack justifyContent="space-around" w="100%" >
                                <div className={styles.countDisplayBox} ><Image boxSize="60px" src={Img} /><Box w="17px" h="20px" bg="grey" borderRadius="50px" ><Text color="white" >{count}</Text></Box></div>
                                <Box w="50%" ><Text fontSize='sm' fontWeight="semibold" textAlign="left" >{Name}</Text></Box>
                                <Box w="25%" ><Text fontSize='sm' fontWeight="semibold" >$ {price.toFixed(2)}</Text></Box>
                        </HStack>
                    })
                }
            </VStack>

            <HStack w="90%" >
                <Input bg="white" size='lg' placeholder="Enter Promocode" onChange={(e)=>setPromoText(e.target.value)} />
                <Button bg="lightgrey" size='lg'>Apply</Button>
            </HStack>

            <HStack justifyContent="space-between" w="86%" borderTop="1px solid lightgrey" borderBottom="1px solid lightgrey" padding="2%"  >
                <VStack>
                    <Text color="grey" fontSize='sm' >Subtotal</Text>
                    <Text color="grey" fontSize='sm' >Shipping</Text>
                    <Text color="grey" fontSize='sm' >Discount</Text>
                </VStack>
                <VStack>
                    <Text color="grey" fontSize='sm' >$ {total_price.toFixed(2)}</Text>
                    <Text color="grey" fontSize='sm' >$ 5.00</Text>
                    <Text color="grey" fontSize='sm' >$ {promo_price.toFixed(2)}</Text>
                </VStack>
            </HStack>

            <HStack justifyContent="space-between" w="86%" borderTop="1px solid lightgrey" borderBottom="1px solid lightgrey" padding="4% 2% 4% 2%" >
                <Box><Text fontSize='lg' >Total</Text></Box>
                <Box><Text fontSize='lg' >$ {(total_price + 5 - promo_price).toFixed(2)}</Text></Box>
            </HStack>
        </VStack>
    )
}

export default CheckoutPayment;




// const cartData=[
    //     {
    //         id: 1,
    //         image: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Mint---Box-Tube_small.png?v=1597743896",
    //         name: "Simply Mint Whitening Toothpaste",
    //         price: 299,
    //         quantity: 1
    //     },
    //     {
    //         id: 2,
    //         image: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_small.png?v=1613065864",
    //         name: "Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
    //         price: 366,
    //         quantity: 2
    //     },
    //     {
    //         id: 3,
    //         image: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Mint---Box-Tube_small.png?v=1597743896",
    //         name: "Simply Mint Whitening Toothpaste",
    //         price: 299,
    //         quantity: 1
    //     },
    //     {
    //         id: 4,
    //         image: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_small.png?v=1613065864",
    //         name: "Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
    //         price: 366,
    //         quantity: 2
    //     }
    // ]