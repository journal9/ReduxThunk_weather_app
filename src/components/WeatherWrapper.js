import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import classes from '../css_modules/WeatherWrapper.module.css'
import Search from './search/Search'
import WeatherDisplay from './display_weather/WeatherDisplay'
import { useDispatch } from 'react-redux'
import { fetchWeather } from '../store/weather'

function WeatherWrapper() {
  const [text,setText] = useState("");
  const [searchText,setSearchText] = useState("")
  const dispatch =useDispatch()

  // useEffect(()=>{
  //   if(searchText){
  //   axios.get(`http://api.weatherapi.com/v1/current.json?key=237a285efb7c4011a55194530230910&q=${searchText}&aqi=no`)
  //     .then(response=>{
  //       console.log(response.data)
  //       setgeoWeather(prevState=>(
  //         {
  //           ...prevState,
  //           'time':response.data.location.localtime,
  //           'temp':response.data.current.feelslike_c,
  //           'humidity':response.data.current.humidity,
  //           'is_day':response.data.current.is_day,
  //           'wind_kph':response.data.current.wind_kph,
  //           'condition':response.data.current.condition.text,
  //           'name':response.data.location.name,
  //           'region':response.data.location.region,
  //           'country':response.data.location.country

  //       }))
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //   }
  // },[searchText])
  console.log(searchText)
  const handleParam = useCallback((data)=>{
    setText(data)
  },[]
  )
  // const callpi=()=>{
  //   console.log(searchText)
  //   console.log("------------")
  //   dispatch(fetchWeather(searchText))
  // }
  const handleSearchText= ()=>{
    setSearchText(text)
  }
  useEffect(() => {
    dispatch(fetchWeather(searchText))
  }, [searchText,dispatch]);

  return (
    <div className={classes.w_body}>
        <Search handleParam={handleParam} handleSearchText={handleSearchText}/>
        <WeatherDisplay />
    </div>
  )
}

export default WeatherWrapper