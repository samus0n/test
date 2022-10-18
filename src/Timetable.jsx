//hachioji minamino station
import { useState, useEffect } from "react"
import hachiojiminamino from "./hachiojiminamino.json"

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
      {inService ? <p>次は{remainingTimeLabel}後に発車するっちぃ！</p> : <p>今日の運行は終わりだっちぃ！</p>}
      <br/>
      <p>今の時間{a}</p>
      <p>{b}</p>
    </>
  )
}

export default Timetable