import React, {useEffect} from 'react';
import './LandingPage.css';
import Demo from './Demo';
import Introduction from './Introduction';
import Services from './Services';
import Mentors from './Mentors';
import Testimonials from './Testimonials';

const LandingPage = () => {

    useEffect(()=>{}, []);

    return (
        <div className='LandingPage'>
            <div id='mainImage'>
                <img id='mainImg' src='/img/landing_page/ban.jpg' alt=''/>
            </div>
            <div id='intro_demo_div'>
                <Demo/>
                <Introduction/>
            </div><br/><br/><br/>
            <Services/>
            <Mentors/>
            <Testimonials/>
        </div>
    )
}
export default LandingPage