import React from 'react'
import { useState,useEffect } from 'react'

const Time = () => {

    const [time,setTime] = useState('')

    useEffect(() => {
      (async() => {
        const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo');
        const times = await res.json();

        const timedata = times.unixtime

        const a = new Date(timedata * 1000);

        const b = a.getHours()+':'+a.getMinutes();

       

 

        setTime(b)
        

      
    
      })()
    }

    

        
    ) 


  return (
    <div>{time}</div>
  )
}

export default Time