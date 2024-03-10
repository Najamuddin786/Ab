import { Center,Box ,Text,Flex, Spacer, Input,Button,Image} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import logoBack2 from '../assets/back2.png'


export default function Footer(){
    return (
        <>
            <Center bg='#a3bbf310' mt='12rem'>
                <Flex flexDirection={'column'} w='100%'>
                <Box w={'100%'} p='8%' mt='-12em'>
                        <Center h='9rem' >
                            <Box borderRadius={'10px'} h="full" bg='#1D33AC' width={'70%'}>
                                <Flex p='1em 3em'>
                                    <Box>
                                    <Text fontSize={'1.5rem'} color={'white'}>Contact Us!</Text>
                                    <Text py='0.7em' fontSize={'1rem'} color={'white'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsam.</Text>
                                    </Box>
                                    <Spacer/>
                                    <Center w='50%' h='8rem'>
                                    <Box display={'flex'} p='1em' w='100%' bg='white' h='3rem' borderRadius={'50em'}>
                                        <Input mt='-0.5em' py='1em' placeholder=" Email Here"/>
                                        <Spacer/>
                                        <Center>
                                        <Button borderRadius={'50px'} p='0.3em 2em' bg='gold'>Send</Button>
                                        </Center>
                                       
                                       </Box>
                                    </Center>

                                </Flex>
                            </Box>
                        </Center>
                </Box>
                
                <Box  w='100%' px='8%' py='2%'>
                    <Flex py='2em' mt='-6em' justify={'space-between'}>
                            <Flex  flexDirection={'column'} gap='5'>
                               
                                    <Flex >
                                    <Image borderRadius={'10rem'} w='40px'h='40px' src={logoBack2}/>
                                    <Text fontWeight={600} fontSize={'1.5rem'} mx='0.5em'>Learning Exp.</Text>
                                    </Flex>
                                    <Flex gap='5'>
                                    <Link  to='https://www.youtube.com/watch?v=MnaxY-Aq-10'><span class="material-symbols-outlined">youtube_activity</span></Link>
                                    <Link to='https://www.youtube.com/watch?v=MnaxY-Aq-10'><span class="material-symbols-outlined">youtube_activity</span></Link>
                                    <Link to='https://www.youtube.com/watch?v=MnaxY-Aq-10'><span class="material-symbols-outlined">youtube_activity</span></Link>
                                    <Link to='https://www.youtube.com/watch?v=MnaxY-Aq-10'><span class="material-symbols-outlined">youtube_activity</span></Link>
                                    </Flex>
                                
                            </Flex>
                            <Flex  fontSize={'1.2rem'} flexDirection={'column'}>
                                <Text fontWeight={600} fontSize={'1.5rem'}>Links</Text>
                                <Link>Home</Link>
                                <Link>Pricing</Link>
                                <Link>Download</Link>
                                <Link>About</Link>
                                <Link>Service</Link>
                            </Flex>
                            <Flex  fontSize={'1.2rem'} flexDirection={'column'}>
                                <Text fontWeight={600} fontSize={'1.5rem'}>Support</Text>
                                <Link>FAQ</Link>
                                <Link>How it</Link>
                                <Link>Features</Link>
                                <Link>Contant</Link>
                                <Link>Reporting</Link>
                            </Flex>
                            <Flex  fontSize={'1.2rem'} flexDirection={'column'}>
                                <Text fontWeight={600} fontSize={'1.5rem'}>Contact Us</Text>
                                <Link>+880 12345678</Link>
                                <Link>youremail@gmail.com</Link>
                                <Link>Pune City</Link>
                                
                            </Flex>
                    </Flex>
                    <Flex gap='5'>
                        <Text>Copyright & Desing By @Learning Exp.</Text>
                        <Spacer/>
                        <Spacer/>
                        <Text>Tearm of use</Text>
                        <Box borderRight={'1px solid black'}></Box>
                        <Text>Privacy Policy</Text>

                    </Flex>
                </Box>
                </Flex>
            </Center>
        </>
    )
}