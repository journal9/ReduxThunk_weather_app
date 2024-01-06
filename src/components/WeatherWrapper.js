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

  const handleParam = useCallback((data)=>{
    setText(data)
  },[]
  )

  const handleSearchText= ()=>{
    setSearchText(text)
  }
  useEffect(() => {
    console.log(searchText)
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