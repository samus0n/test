//hachioji minamino station
import { useState, useEffect } from "react"
import {} from "react-dom"
import hachiojiminamino from "./hachiojiminamino.json"
import {} from "./Timetable.css"
import Footer from "./components/Footer"
import 'animate.css';
import Img from "./components/minamibus.png"

//import MediaQuery from "react-rersponsive";

const Timetable = () => {
  const [inService, setInService] = useState(false)
  const [remainingTimeLabel, setRemainingTimeLabel] = useState("");
  const [a,setA]=useState("");
  const [b,setB] = useState("");
 
  

  useEffect(() => {
    const departureTimeArr =hachiojiminamino.departureTime

    setInterval(() => {
      const date = new Date()
      for (let v of departureTimeArr) {
        const splitTimeArr = v.split(":")

        const targetDateObj = new Date()

        const ggg = targetDateObj.toLocaleTimeString();

        const bbb = splitTimeArr;

        const t = ('00' + ggg).slice(-2);


        

        targetDateObj.setHours(splitTimeArr[0])
        targetDateObj.setMinutes(splitTimeArr[1])
        targetDateObj.setSeconds(0)


        
         




        

        if (date < targetDateObj) {
          const remainingTime = Math.floor(((date - targetDateObj) / 1000) * -1) //秒
          /*console.log(`currentTime:${date}`)*/
          console.log(`targetTime:${targetDateObj}`)
          
          console.log(`残り時間:${remainingTime}`)

          const m = Math.floor(remainingTime % (24 * 60 * 60) % (60 * 60) / 60)
          const s = remainingTime % (24 * 60 * 60) % (60 * 60) % 60
         
          const t = ('00' + s).slice(-2);

          setA(`${ggg}`)

          setB(`${bbb}`)

     

          setRemainingTimeLabel(`${m}:${t}`)
          setInService(true)

          break
        }

        setInService(false)
      }
    }, 1000)
  }, [])
  return (
    <>
   <div className="back1">
   <div className=' box delay01 animate__animated animate__fadeIn'>
   <div className = "card5">
      <div className = "content">
        <h2>八王子みなみ野駅➡学校</h2><br></br>
        <p>現在時刻 {a}</p>
        {inService ? <h3>発車まで　{remainingTimeLabel}</h3> : <p>今日の運行は終わりだっちぃ！</p>}
        <p>発車時刻　{b}</p>
        
      </div>
    </div>
    <div className="oritatami">
      <div className="card3">

    <details>
  <summary>バス停</summary>
  <img src={Img} alt="Dinosaur"/>

</details>
</div>
</div>
   </div>
   </div>
   


    <Footer/>

    </>
  )
}

export default Timetable

