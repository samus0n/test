import React from 'react'
import "./Home.css"

const backgroundPicture = new URL("./images/JShine.png",import.meta.url)

const Home = () => {
  return (
    <section>

      




      
      
     <div className='button'>
      <button class="btn btn-wide" id='a'>八王子駅発</button>
      <button class="btn btn-wide" id='a'>みなみ野駅発</button><br/>
      <button class="btn btn-wide" id='a'>学生会館発</button>
      </div>


    </section>
  )
}

export default Home