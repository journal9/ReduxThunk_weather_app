import React from 'react'
import { useSelector } from 'react-redux';

function WeatherDisplay() {
  const {data} =useSelector(state=>state.weather)
  return (
    <div>
      { data.icon ? <img src={data.icon} alt='icon weather'/>:<button></button>}
      { data.time && <div>{ data.time }</div>}
      { data.temp && <div>{ data.temp }</div>}
      { data.humidity ? <div>{ data.humidity }</div>:<button></button>}
      { data.name ? <div>{data.name}</div>:<button></button>}
      { data.region ? <div>{data.region}</div>:<button></button>}
      { data.country ? <div>{data.country}</div>:<button></button>}
      { data.wind_kph ? <div>{data.wind_kph}</div>:<button></button>}
      { data.condition ? <div>{data.condition}</div>:<button></button>}
    </div>
  )
}

export default WeatherDisplay;