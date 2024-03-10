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
import Main from "../Components/Main"

export default function Home(){
    console.log(logoBack1)
    return (<>
        <Center >
        <Box w='1400px' bg='#F8F8FC'  >
            
            <Main/>
            
        </Box>
        </Center>
    </>)
}