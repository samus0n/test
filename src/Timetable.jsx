//hachioji minamino station
import { useState, useEffect } from "react"
import {} from "react-dom"
import hachiojiminamino from "./hachiojiminamino.json"
import {} from "./Timetable.css"
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




        

        targetDateObj.setHours(splitTimeArr[0])
        targetDateObj.setMinutes(splitTimeArr[1])
        targetDateObj.setSeconds(0)


        
         




        

        if (date < targetDateObj) {
          const remainingTime = Math.floor(((date - targetDateObj) / 1000) * -1) //秒
          /*console.log(`currentTime:${date}`)*/
          console.log(`targetTime:${targetDateObj}`)
          
          console.log(`残り時間:${remainingTime}`)

          const h = Math.floor(remainingTime % (24 * 60 * 60) / (60 * 60))
          const m = Math.floor(remainingTime % (24 * 60 * 60) % (60 * 60) / 60)
          const s = remainingTime % (24 * 60 * 60) % (60 * 60) % 60



          setA(`${ggg}`)

          setB(`${bbb}`)

     

          setRemainingTimeLabel(`${h}時間${m}分${s}秒`)
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
   <div className = "card">
      <div className = "content">
        <h1>八王子みなみ野駅➡学校</h1>
        <h2>現在時刻 {a}</h2>
        {inService ? <p>次は{remainingTimeLabel}後に発車するっちぃ!</p> : <p>今日の運行は終わりだっちぃ！</p>}
        <p>次発　{b}</p>
      </div>
    </div>
   </div>
      
    </>
  )
}

export default Timetable

