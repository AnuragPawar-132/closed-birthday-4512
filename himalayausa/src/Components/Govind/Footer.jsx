import { ReactNode } from 'react';

import {
  Box,
  Container,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';
import {FiYoutube  } from 'react-icons/fi';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={15}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 2fr 0fr 0fr' }}
          spacing={12}>
          <Stack align={'flex-start'}>
            <ListHeader>Info</ListHeader>
            <div href={'#'}>Contact Us</div>
            <div href={'#'}>FAQ</div>
            <div href={'#'}>Blog</div>
            <div href={'#'}>Store Locator</div>
            <div href={'#'}>Careers</div>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Policies</ListHeader>
            <div href={'#'}>Shipping</div>
            <div href={'#'}>Terms & Conditions</div>
            <div href={'#'}>Privacy</div>
            <div href={'#'}>CCPA</div>
            <div href={'#'}>Accessibility</div>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contact Us</ListHeader>
            <div style={{color:"dark-black"}} href={'#'}>Email:</div>
            <span>writetous@himalayausa.com</span>
            <Link href={'#'}>Phone:</Link>
            <span>1-800-869-4640</span>
            <span>Mon-Fri,8am-5pm CT</span>
            <div>Mail:</div>
            <span>Himalaya Wellness</span>
            <span>1101 Gillingham Lane</span>
            <span>Sugar Land, TX 77478</span>
          </Stack>
          <Stack align={'flex-start'}>
          <ListHeader color="black">Social Media</ListHeader>
          <Box>
          <Input  width="280px" border="none" outline="none"  type="text" placeholder="Enter your e-mail" /> 
          </Box>
                <Text textAlign="left" >
                By entering your email, you agree to our Terms & Conditions and Privacy Policy.
                </Text>
                <Box display="flex" marginbottom="5%" gap="10px" >
            <Link href={'#'}>LinkedIn :</Link>
            <FaFacebookF fontSize="20px" color="black"/>
            <FaTwitter  fontSize="20px" color="black"/>
            <FaInstagram fontSize="20px" color="black"/>
            <FiYoutube fontSize="20px" color="black"/>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box textAlign="left" marginLeft="105px">
      <div >© 2022 Himalaya Wellness. All rights reserved.</div>
      </Box><br></br>
      <Box  width="88%" height="40px"  textAlign="left" marginLeft="95px" fontSize="14px" border="solid 1px black">
      <div marginTop="30px">*THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.</div>
      </Box>
    </Box>
   
  );
}