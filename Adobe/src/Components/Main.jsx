import {Box, Button, Center,Image,Flex,Text, Spacer} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import Footer from "../Components/Footer"
import logoBack1 from '../assets/back1.png'
import logoBack2 from '../assets/back2.png'
import logoBack3 from '../assets/back3.png'
import logoBack4 from '../assets/back4.png'
import logoBack5 from '../assets/back5.png'
import logoBack6 from '../assets/back6.png'
import Navbar from "../Components/Navbar"

export default function Main(){
    console.log(logoBack1)
    return (<>
        <Center >
        <Box w='1400px' bg='#F8F8FC'  >
            {/* ____________________ Part 1 ____________________ */}
          
            <Flex my='2em' textAlign='center'>
                <Spacer/>
                  <Flex w='50%' flexDirection={'column'} align={'center'}>
                  <Text fontWeight='600' lineHeight='1.2' w='80%' fontSize='2.5rem' color='black'>We provide various kind of learning modules for you</Text>
                  <Text opacity={'0.6'} my='2em' lineHeight='1.2' fontSize={'1.2rem'} w='90%'  color='black'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem</Text>

                  </Flex>
                <Spacer/>
            </Flex>
            {/* ____________________ Part 2____________________ */}
            <Flex my='2em' px='8%' textAlign='center' w='100%' >
                <Center w='100%' >
                    <Flex alignContent={'center'} align={'center'} w='100%' justifyContent={"space-between"}>
                        
                        <Box bg='white' p='2em' w={'27%'} borderRadius={'10px'}>
                            <Center><Image  src={logoBack3}/></Center>
                            <Text fontSize={'1.8rem'} fontWeight={600}>Learn Anything</Text>
                            <Text opacity={'0.6'} fontSize={'1.2rem'} textAlign={'left'}>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</Text>
                        </Box>
                        
                        <Box  bg='rgba(245, 222, 179, 0.711)' p='2em' w={'30%'} borderRadius={'10px'}>
                            <Center><Image  src={logoBack4}/></Center>
                            <Text fontSize={'1.8rem'} fontWeight={600}>Learn Anything</Text>
                            <Text opacity={'0.6'} fontSize={'1.2rem'} textAlign={'left'}>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</Text>
                        </Box>
                        <Box bg='white' p='2em' w={'27%'} borderRadius={'10px'}>
                            <Center><Image  src={logoBack5}/></Center>
                            <Text fontSize={'1.8rem'} fontWeight={600}>Learn Anything</Text>
                            <Text opacity={'0.6'} fontSize={'1.2rem'} textAlign={'left'}>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</Text>
                        </Box>
                    </Flex>
                </Center>
            </Flex>
            {/* ____________________ Part 3 ____________________ */}
            <Flex my='2em' textAlign='center'>
                <Spacer/>
                  <Flex w='50%' flexDirection={'column'} align={'center'}>
                  <Text fontWeight='600' lineHeight='1.2' w='80%' fontSize='2.5rem' color='black'>Why Us</Text>
                  <Text opacity={'0.6'} my='2em' fontSize={'1.2rem'} lineHeight='1.2' w='90%'  color='black'>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</Text>

                  </Flex>
                <Spacer/>
            </Flex>
            {/* ____________________ Part 4 ____________________ */}
            <Flex my='2em' px='8%' textAlign='center' flexDirection={'column'}>
                <Box>
                <Flex  gap='10'><Box w={'7px'} justifyContent={'center'} h='7px'borderRadius={'10px'} background='#D85353'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353' mr='50px'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353'></Box></Flex>
                    <Flex my='3em' gap='10'><Box w={'7px'} justifyContent={'center'} h='7px'borderRadius={'10px'} background='#D85353'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353' mr='50px'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353'></Box></Flex>
                </Box>
                <Flex>
                    <Box mt='-2em'>
                        <Box bg='rgba(137, 43, 226, 0.437)' w='530px'  h='95%' borderRadius={'25px'}>
                        <Center h='full' >
                        <iframe style={{borderRadius:"25px"}} width="500px" height="90%" src="https://www.youtube.com/embed/MnaxY-Aq-10?si=J6btaoUi28hK2jt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Center>
                        </Box>

                    </Box>
                    <Spacer/>
                    <Flex textAlign={'left'} w='50%'  flexDirection={'column'} >
                            <Text fontWeight='700' lineHeight='1.2'  fontSize='2rem' color='black'>Crafting Your Dream Career: Building a Path You Love with us</Text>
                            <Text opacity={'0.6'} my='2em'fontSize={'1.2rem'} lineHeight='1.2'  color='black'>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.
                            </Text>
                            <Text opacity={'0.6'} fontSize={'1.2rem'} lineHeight='1.2'  color='black'>
                            Our Platform Is Designed To Empower Learners Like You To Excel In Toda Dynamic World.
                            </Text>
                            <Button my='1em' p=' 0.5em 1em' w='150px' borderRadius={'50px'} bg='gold' fontSize={'1.2rem'} fontWeight={'600'}>Get More</Button>

                    </Flex>
                </Flex>
                <Box >
                    <Center>
                    <Flex flexDirection={'column'} ml='-25em' mt='-2em'>
                    <Flex  gap='10'><Box w={'7px'} justifyContent={'center'} h='7px'borderRadius={'10px'} background='#D85353'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353' mr='50px'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353'></Box></Flex>
                    <Flex  my='3em' gap='10'><Box w={'7px'} justifyContent={'center'} h='7px'borderRadius={'10px'} background='#D85353'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353' mr='50px'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353'></Box><Box w={'7px'} h='7px'borderRadius={'10px'} background='#D85353'></Box></Flex>
                    </Flex>
                    </Center>
                </Box>
            </Flex>
            
            {/* ____________________ Part 5 ____________________ */}
            <Flex my='2em' textAlign='center'>
                <Spacer/>
                  <Flex w='80%' flexDirection={'column'} align={'center'}>
                  <Text fontWeight='600' lineHeight='1.2' w='80%' fontSize='2.5rem' color='black'>We Completed 1200+ Certification Program
                    Successfully & Counting</Text>
                  <Text  my='2em'fontSize={'1.2rem'} lineHeight='1.2' w='65%'  color='black'>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</Text>

                  </Flex>
                <Spacer/>
            </Flex>
            {/* ____________________ Part 6 ____________________ */}
            <Flex p='2% 12% 6% 12%' my='2em' justifyContent={'space-between'} textAlign='center' fontSize={'1.2rem'} fontWeight={600} >
                <Flex >
                    <span style={{fontSize:"4rem" ,color:"blue"}} class="material-symbols-outlined">check_circle</span>
                    <Flex gap='0' textAlign={'left'} flexDirection={'column'} >
                        <Text color={'blue'}>100+</Text>
                        <Text mt='-5px' color={'blue'}>Batch Complated</Text>
                    </Flex>
                </Flex>
                <Flex >
                    <span style={{fontSize:"4rem" ,color:"blue"}} class="material-symbols-outlined">check_circle</span>
                    <Flex gap='0' textAlign={'left'} flexDirection={'column'} >
                        <Text color={'blue'}>10+</Text>
                        <Text mt='-5px' >Active Batches</Text>
                    </Flex>
                </Flex>
                <Flex >
                    <span style={{fontSize:"4rem" ,color:"blue"}} class="material-symbols-outlined">check_circle</span>
                    <Flex gap='0' textAlign={'left'} flexDirection={'column'} >
                        <Text color={'blue'}>10000+</Text>
                        <Text mt='-5px' >Student Satisfied</Text>
                    </Flex>
                </Flex>
                <Flex >
                    <span style={{fontSize:"4rem" ,color:"blue"}} class="material-symbols-outlined">check_circle</span>
                    <Flex gap='0' textAlign={'left'} flexDirection={'column'} >
                        <Text color={'blue'}>10+</Text>
                        <Text mt='-5px' >Course Modules</Text>
                    </Flex>
                </Flex>
            </Flex>
            {/* ____________________ Part 7 ____________________ */}
            <Flex my='2em' px="8%" flexDirection={"column"}>
                
                  <Flex w='100%' flexDirection={'column'} >
                  <Flex><Text fontWeight='600' lineHeight='1.2' w='100%' fontSize='2.5rem' color='black'>Our Students Feedback</Text><Spacer/><Button bg={'rgb(220, 220, 220)' } p='0.5em 1em' borderRadius={'10px'}>Read More</Button></Flex>
                  <Text  opacity={'0.5'} my='2em'fontSize={'1.2rem'} lineHeight='1.2' w='100%'  color='black'>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</Text>

                  </Flex>

                  <Box boxShadow='xl'  rounded='md'  bg='#b6c4f294'>
                    <Flex justifyContent={'space-between'}>
                        <Image w='30%' h='25rem' src={logoBack6}/>
                        <Box w='50%'  p='5em' fontWeight={'600'}>
                            <Flex >

                            </Flex>
                            <Text fontSize={'1.2rem'}>"Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium DoloremqueLaudantium,Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo
                            </Text>
                            <Text my='1em' fontSize={'1.6rem'}>Riad Isalm</Text>
                            <Text display={'flex'}>Product Manager <Text color={'blue'}>@Learning.Com</Text></Text>

                        </Box>
                        <Box w='20%' h='20px'></Box>
                    </Flex>

                  </Box>
                  

                
            </Flex>
           
        </Box>
        </Center>
    </>)
}