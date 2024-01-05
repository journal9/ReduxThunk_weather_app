import React from 'react'

function WeatherDisplay({weatherData}) {
  console.log(weatherData)
  return (
    <div>
      { weatherData.time && <div>{weatherData.time}</div>}
      { weatherData.temp && <div>{weatherData.temp}</div>}
      { weatherData.humidity ? <div>{weatherData.humidity}</div>:<button></button>}
      { weatherData.name ? <div>{weatherData.name}</div>:<button></button>}
      { weatherData.region ? <div>{weatherData.region}</div>:<button></button>}
      { weatherData.country ? <div>{weatherData.country}</div>:<button></button>}
      { weatherData.is_day && <div>{weatherData.is_day}</div> }
      { weatherData.wind_kph ? <div>{weatherData.wind_kph}</div>:<button></button>}
      { weatherData.condition ? <div>{weatherData.condition}</div>:<button></button>}
    </div>
  )
}

export default React.memo(WeatherDisplay);