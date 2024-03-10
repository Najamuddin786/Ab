import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactUs from '../Pages/ContactUs'
import OurGoals from '../Pages/OurGoals'
import ServicesUs from '../Pages/ServicesUs'
import WhyUs from '../Pages/WhyUs'
import PageNot from '../Pages/PageNor'

export default function AllRoutes(){
    return (<>
            <Navbar/>
            <Routes>
                <Route path='/'  element={<Home/>}/>
                <Route path='/contact'  element={<ContactUs/>}/>
                <Route path='/goals'  element={<OurGoals/>}/>
                <Route path='/services'  element={<ServicesUs/>}/>
                <Route path='/whyus'  element={<WhyUs/>}/>
                <Route path='*' element={<PageNot/>}/>
            </Routes>
            <Footer/>
    </>)
}