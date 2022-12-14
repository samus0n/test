//hachioji station
import { useState, useEffect } from "react"
import hachioji from "./hachioji.json"
import {} from "./Timetable2.css"
import 'animate.css';

const Timetable = () => {
  const [inService, setInService] = useState(false)
  const [remainingTimeLabel, setRemainingTimeLabel] = useState("");
  const [a,setA]=useState("");
  const [b,setB] = useState("");

  

  useEffect(() => {
    const departureTimeArr =hachioji.departureTime

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

          
          const m = Math.floor(remainingTime % (24 * 60 * 60) % (60 * 60) / 60)
          const s = remainingTime % (24 * 60 * 60) % (60 * 60) % 60



          setA(`${ggg}`)

          setB(`${bbb}`)

     

          setRemainingTimeLabel(`${m}:${s}`)
          setInService(true)

          break
        }

        setInService(false)
      }
    }, 1000)
  }, [])
  return (
    <>
   <div className="back2">
   <div className=' box delay01 animate__animated animate__fadeIn'>
   <div className = "card">
      <div className = "content">
        <h2>八王子駅➡学校</h2><br></br>
        <p>現在時刻  {a}</p>
        {inService ? <p>発車まで　{remainingTimeLabel}</p> : <p>今日の運行は終わりだっちぃ！</p>}
        <p>次発　{b}</p>
      </div>
    </div>
    </div>
     </div>
     
    </>
  )
}

export default Timetable