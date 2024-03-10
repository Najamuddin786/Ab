import {Box, Button, Center,Image,Flex,Text, Spacer} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import Footer from "../Components/Footer"
import logoBack1 from '../assets/back1.png'
import logoBack2 from '../assets/back2.png'
import logoBack3 from '../assets/back3.png'
import logoBack4 from '../assets/back4.png'
import logoBack5 from '../assets/back5.png'
import logoBack6 from '../assets/back6.png'
import '../App.css'

export default function Navbar(){
    console.log(logoBack1)
    return (<>
        <Center >
        <Box w='1400px' bg='#F8F8FC'  >
            <Center w='100%'>
                {/* -------------------- First Part ____________________ */}
            <Box mb='2em' px='8%' w='100%'  h='800px' bgSize='contain' bgRepeat='no-repeat'  bgImage={logoBack1}>
                <Flex color='white' h='7rem' align='center' fontSize='1.1rem' gap='6'>
                    <Center>
                    <Flex gap='2' fontSize='1.6rem' fontWeight='600'>
                        <Image w='50px' h='50px' mt='-0.3em'  src={logoBack2} borderRadius='500px'/>
                        <Text cursor='pointer'>Learning Exp.</Text>
                    </Flex>
                    </Center>
                    <Spacer/>
                    <Text className="zoom" borderBottom={'2px solid gold'} cursor='pointer'><Link to='/'>Home</Link></Text>
                    <Text className="zoom" cursor='pointer'><Link to='/services'>Service Us</Link></Text>
                    <Text className="zoom" cursor='pointer'><Link to='/whyus'>Why Us</Link></Text>
                    <Text className="zoom" cursor='pointer'><Link to='/goals'>Our Goald</Link></Text>
                    <Button className="zoom" color='black' background='gold' borderRadius='30px' p='5px 20px' fontWeight='600'><Link to='/contact'>Contact Us</Link></Button>
                </Flex>

                {/* _____________________ VIDEO PART _____________________
                  */}
                 <Flex >
                    <Flex my='3.2rem' w='48%' color={'white'} flexDirection='column'>
                            <Text fontSize='2.5rem' fontWeight={600}>We Create Learning Experience With Excellent Technology.</Text>
                            <Text fontSize='1.2rem' w='80%' my='1em'>
                            Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs- All Included In Your Subscription
                            </Text>
                            <Flex gap='5' my='1em'>
                                <Button color='black' fontWeight={600} fontSize='1.2rem' bg='gold' borderRadius='50px' p='0.5em 1em'>Book Demo Class</Button>
                                <Button>Explore More</Button>
                            </Flex>
                    </Flex> 
                    <Spacer/>
                    <Box className="zoom"  my='3.2rem'  width='535px' h='320px' bg='rgba(51, 0, 255, 0.31)' borderRadius='1rem' border>
                        <Center h='full'>
                         <iframe width="515px" style={{borderRadius:"1rem"}} height="302" src="https://www.youtube.com/embed/VbGl3msgce8?si=ROIsLwANHPUgmEj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                         </Center>
                 </Box>
                 </Flex>

            </Box>
            </Center>
                 
            
        </Box>
        </Center>
    </>)
}