//dorm
import { useState, useEffect } from "react"
import dorm from "./dorm.json"
import {} from "./Timetable3.css"
import 'animate.css'
import Footer from "./components/Footer"

const Timetable = () => {
  const [inService, setInService] = useState(false)
  const [remainingTimeLabel, setRemainingTimeLabel] = useState("");
  const [a,setA]=useState("");
  const [b,setB] = useState("");
  const [c,setC] = useState("");
  

  useEffect(() => {
    const departureTimeArr =dorm.departureTime

    setInterval(() => {
      const date = new Date()
      for (let v of departureTimeArr) {
        const splitTimeArr = v.split(":")

        const targetDateObj = new Date()

        const ggg = targetDateObj.toLocaleTimeString();

        const bbb = splitTimeArr[0];
        const ccc = splitTimeArr[1];




        

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

          setC(`${ccc}`)

     

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
   
   <div className="back3">
  
   <div className=' box delay01 animate__animated animate__fadeIn'>
   <div className = "card7">
      <div className = "content">
        <h2>学生会館➡学校</h2><br></br>
        <p>現在時刻 {a}</p>
        {inService ? <p>発車まで　{remainingTimeLabel}</p> : <p>今日の運行は終わりだっちぃ！</p>}
        <p>発車時刻　{b}:{c}</p>
      </div>
    </div>
    </div>
     </div>

<Footer/>
    </>
  )
}

export default Timetable