import React from 'react'
import classes from '../css_modules/WeatherBack.module.css'
import WeatherWrapper from './WeatherWrapper'

function WeatherBack() {
  return (
    <div className={classes.back_screen}>
        <div className={classes.screen}>
            <WeatherWrapper/>
        </div>
    </div>
  )
}

export default WeatherBack