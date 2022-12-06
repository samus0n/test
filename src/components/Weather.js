import React from 'react'
import { useState,useEffect } from 'react'
import "./Weather.css"



const Weather = () => {
    const [weather,setWeather] = useState({
        label:"",
        image:"",
        temperature:""

    });

    useEffect(() => {
        (async () => {
            const res = await fetch("https://weather.tsukumijima.net/api/forecast/city/130010")
            const a = await res.json();

            const todaysWeather = a.forecasts[0]

            setWeather({
                label: todaysWeather.telop,
                image: todaysWeather.image.url,
                temperature: todaysWeather.temperature.max.celsius
            })
        }) ()

    },[])
  return (


    <div>
        <div className='tenki'>{weather.label}</div>
        <div className='tenkiimage'>
            <img src ={weather.image} id ="aaa"></img>
            
        </div>
        <div className='temp'>
        <p>最高気温は{weather.temperature}°です。</p>
        </div>
      
    </div>
  )
}

export default Weather