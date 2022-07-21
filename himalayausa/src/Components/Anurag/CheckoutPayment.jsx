import React from "react";
import { Stack, HStack, VStack, Text, Box, Image, Button, Spacer, Link, Input } from '@chakra-ui/react';
import styles from "./CheckoutPayment.module.css"

const CheckoutPayment=()=>{

    const cartData=[
        {
            id: 1,
            image: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Mint---Box-Tube_small.png?v=1597743896",
            name: "Simply Mint Whitening Toothpaste",
            price: 299,
            quantity: 1
        },
        {
            id: 2,
            image: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_small.png?v=1613065864",
            name: "Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
            price: 366,
            quantity: 2
        },
        {
            id: 3,
            image: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Mint---Box-Tube_small.png?v=1597743896",
            name: "Simply Mint Whitening Toothpaste",
            price: 299,
            quantity: 1
        },
        {
            id: 4,
            image: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_small.png?v=1613065864",
            name: "Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
            price: 366,
            quantity: 2
        }
    ]
    console.log(cartData)

    return (
        <VStack w="100%" spacing="5%" >

            <VStack className={styles.cartBox_any}  >
                {
                    cartData.map(({id, price, name, image})=>{
                        return <HStack justifyContent="space-around" w="100%" >
                                <Box w="25%" ><Image boxSize="60px" src={image} /></Box>
                                <Box w="50%" ><Text fontSize='sm' fontWeight="semibold" textAlign="left" >{name}</Text></Box>
                                <Box w="25%" ><Text fontSize='sm' fontWeight="semibold" >$ {price}</Text></Box>
                        </HStack>
                    })
                }
            </VStack>

            <HStack w="90%" >
                <Input bg="white" size='lg' placeholder="Enter Promocode" />
                <Button bg="lightgrey" size='lg' >Apply</Button>
            </HStack>

            <HStack justifyContent="space-between" w="86%" borderTop="1px solid lightgrey" borderBottom="1px solid lightgrey" padding="2%"  >
                <VStack>
                    <Text color="grey" fontSize='sm' >Subtotal</Text>
                    <Text color="grey" fontSize='sm' >Shipping</Text>
                </VStack>
                <VStack>
                    <Text color="grey" fontSize='sm' >$ 877</Text>
                    <Text color="grey" fontSize='sm' >$ 30</Text>
                </VStack>
            </HStack>

            <HStack justifyContent="space-between" w="86%" borderTop="1px solid lightgrey" borderBottom="1px solid lightgrey" padding="4% 2% 4% 2%" >
                <Box><Text fontSize='lg' >Total</Text></Box>
                <Box><Text fontSize='lg' >$ 907</Text></Box>
            </HStack>
        </VStack>
    )
}

export default CheckoutPayment;