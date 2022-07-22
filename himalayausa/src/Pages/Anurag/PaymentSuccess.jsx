import React from "react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const PaymentSuccess=()=>{
    return (
                    <Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='200px'
                            >
                            <AlertIcon boxSize='40px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                Order Placed!
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                Thanks for shopping with us!
                            </AlertDescription>
                    </Alert>
    )
}

export default PaymentSuccess