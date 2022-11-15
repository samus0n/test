import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom";


const backgroundPicture = new URL("./images/JShine.png",import.meta.url)

const Home = () => {
  return (
    <section>

      




      
      
     <div className='button'>
      <button class="btn btn-wide" id='a'><Link to="/time2">八王子駅南口発</Link></button>
      <button class="btn btn-wide" id='a'><Link to="/time1">八王子みなみ野発</Link></button><br/>
      <button class="btn btn-wide" id='a'><Link to="/time3">学生会館発</Link></button>
      </div>


    </section>
  )
}

export default Home