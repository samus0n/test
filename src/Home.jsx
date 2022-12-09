import React, { usestate,useEffect } from 'react'
import "./Home.css"
import {Link} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import Weather from './components/Weather';


const Home = () => {


  useEffect(() => {
   Aos.init({duration: 2000});
  },[])







  return (

    <div className='back'>


    <section>

      




      
    <div className=' box delay02 animate__animated animate__fadeIn'>
     <div className='button'>
      <div className='top1'>
      <button class="btn btn-wide" id='a'><Link to="/time2">八王子駅南口発</Link></button>
      <button class="btn btn-wide" id='a'><Link to="/time1">八王子みなみ野発</Link></button><br/>
      </div>
      <button class="btn btn-wide" id='a'><Link to="/time3">学生会館発</Link></button>
      </div>
      </div>


    <div data-aos="fade">
 



    //あーーー
    
      <div className='card1'>
    
      <Weather/>
  

      </div>
    
      
      
      </div>

    </section>
    </div>
  )
}

export default Home