import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import classes from '../css_modules/WeatherWrapper.module.css'
import Search from './search/Search'
import WeatherDisplay from './display_weather/WeatherDisplay'
import axios from 'axios'

function WeatherWrapper() {
  const [text,setText] = useState("");
  const [searchText,setSearchText] = useState("")
  const [geoWeather,setgeoWeather] = useState({})
  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  useEffect(()=>{
    if(searchText){
    axios.get(`http://api.weatherapi.com/v1/current.json?key=237a285efb7c4011a55194530230910&q=${searchText}&aqi=no`)
      .then(response=>{
        console.log(response.data)
        setgeoWeather(prevState=>(
          {
            ...prevState,
            'time':response.data.location.localtime,
            'temp':response.data.current.feelslike_c,
            'humidity':response.data.current.humidity,
            'is_day':response.data.current.is_day,
            'wind_kph':response.data.current.wind_kph,
            'condition':response.data.current.condition.text,
            'name':response.data.location.name,
            'region':response.data.location.region,
            'country':response.data.location.country

        }))
      })
      .catch(error => {
        console.error(error);
      });
    }
  },[searchText])

  const handleParam = useCallback((data)=>{
    setText(data)
  },[]
  )

  const handleSearchText= useCallback(()=>{
    setSearchText(text)
  },[text])

  return (
    <div className={classes.w_body}>
        <Search handleParam={handleParam} handleSearchText={handleSearchText}/>
        <WeatherDisplay weatherData={geoWeather}/>
    </div>
  )
}

export default WeatherWrapper