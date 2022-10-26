import React from 'react'
import "./Home.css"

const backgroundPicture = new URL("./images/JShine.png",import.meta.url)

const Home = () => {
  return (
    <section>
      <div className = "background">
         <img src = {backgroundPicture} />
     </div>
    </section>
  )
}

export default Home