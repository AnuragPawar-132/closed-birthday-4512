import React from "react";
import { Stack, HStack, VStack, Text, Box, Image, Button, Spacer, Link, Input } from '@chakra-ui/react'


const Checkout=()=>{

    return (
        <HStack >

            <VStack w="55%"  padding="2%" border="1px solid grey" spacing="3%" >

               <Box alignContent="left" padding="3% 0% 3% 6%" >
                    <Image w="35%" h="auto" src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/new-logo.png?3734" /> 
               </Box>

               <Box w="90%" >
                    <Text fontSize="small" fontWeight="bold" color="blackAlpha.700" fontStyle='system-ui' >Express Checkout</Text>
                    
                    <HStack border="1.2px solid gray" borderRadius="5px" padding="3% 5% 3% 5%" marginTop="2%" >
                        <Button w="33%" bg="#5D2CF6" color="white" >Shop Pay</Button>
                        
                        <Button w="33%" bg='#F79C34' >Amazon Pay</Button>
                        
                        <Button w="33%" bg="black" color="white" >G Pay</Button>
                    </HStack>
               </Box>

               <HStack>
                    <Text color="blackAlpha.700" fontSize='sm' >OR</Text>
               </HStack>

               <Stack w="90%" spacing="2%" >

                    <HStack justifyContent="space-between" >
                        <Box>
                            <Text fontSize='lg' >Contact Information</Text>
                        </Box>
                        <HStack>
                            <Text color="blackAlpha.700"  >Alredy have an account :</Text>
                            <Link color="blackAlpha.700" >Login</Link>
                        </HStack>
                    </HStack>

                    <Input focusBorderColor="#0D362B" placeholder="Enter Email or Mobile number" />

                    <Text fontSize='lg' >Shipping Address</Text>

                    <Input focusBorderColor="#0D362B" placeholder="Country" />

                    <HStack>
                        <Input focusBorderColor="#0D362B" placeholder="First Name" />
                        <Input focusBorderColor="#0D362B" placeholder="Last Name" />
                    </HStack>

                    <Input focusBorderColor="#0D362B" placeholder="Address" />

                    <Input focusBorderColor="#0D362B" placeholder="Appartment" />

                    <HStack>
                        <Input focusBorderColor="#0D362B" placeholder="City" />
                        <Input focusBorderColor="#0D362B" placeholder="State" />
                        <Input focusBorderColor="#0D362B" type="number" placeholder="Zip Code" />
                        </HStack>

                    <Input focusBorderColor="#0D362B" type="number" placeholder="Phone Number" />

                    <Button bg="#0D362B" color="white" >Proceed to Payment</Button>

               </Stack>
               
            </VStack>

            <Box w="45%">
                
            </Box>
        </HStack>
    )
}

export default Checkout;

//<Image w="31%" cursor="pointer" src="http://cdn.shopify.com/s/files/1/0887/6296/files/Untitled_6_480x480.png?v=1636747001" />