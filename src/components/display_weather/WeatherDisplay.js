import React from 'react'
import { useSelector } from 'react-redux';

function WeatherDisplay() {
  const {data} =useSelector(state=>state.weather)
  return (
    <div>
      { data.time && <div>{ data.time }</div>}
      { data.temp && <div>{ data.temp }</div>}
      { data.humidity ? <div>{ data.humidity }</div>:<button></button>}
      {/* { weatherData.name ? <div>{weatherData.name}</div>:<button></button>}
      { weatherData.region ? <div>{weatherData.region}</div>:<button></button>}
      { weatherData.country ? <div>{weatherData.country}</div>:<button></button>}
      { weatherData.is_day && <div>{weatherData.is_day}</div> }
      { weatherData.wind_kph ? <div>{weatherData.wind_kph}</div>:<button></button>}
      { weatherData.condition ? <div>{weatherData.condition}</div>:<button></button>} */}
    </div>
  )
}

export default WeatherDisplay;