import React,{useState} from 'react'
import './WeatherApp.css'

import search_icon from '../Assests/search.png'
import clear_icon from '../Assests/clear.png'
import drizzle_icon from '../Assests/drizzle.png'
import cloud_icon from '../Assests/cloud.png'
import humidity_icon from '../Assests/humidity.png'
import snow_icon from '../Assests/snow.png'
import rain_icon from '../Assests/rain.png'
import wind_icon from '../Assests/wind.png'


const WeatherApp = () => {

let apikey='fd13e110ca495dd3a06cd1767c3e33ae';
const [w_icon,set_Wicon]=useState(cloud_icon);

const search=async ()=>{
  const element=document.getElementsByClassName('cityInput')
  if(element[0].value==="")
  {
    return 0;
  }
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`;

  let response=await fetch(url);
  let data=await response.json();
  const humidity=document.getElementsByClassName("humidity-percent")
  const wind=document.getElementsByClassName('wind-speed')
   const temperature=document.getElementsByClassName('weather-temp')
  const location=document.getElementsByClassName('weather-location')

  humidity[0].innerHTML=data.main.humidity+" %";
  wind[0].innerHTML=data.wind.speed+" Km/h";
  temperature[0].innerHTML=data.main.temp+" °C";
  location[0].innerHTML=data.name;


  if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
  {
    set_Wicon(clear_icon);
  }
  else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
    set_Wicon(cloud_icon);
  }
  else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
    set_Wicon(drizzle_icon);
  }
  else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
    set_Wicon(cloud_icon);
  }
  else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
    set_Wicon(rain_icon);
  }
  else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
    set_Wicon(rain_icon);
  }
  else if(data.weather[0].icon==="11d" || data.weather[0].icon==="11n"){
    set_Wicon(rain_icon);
  }
  else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
    set_Wicon(snow_icon);
  }
  else{
    set_Wicon(clear_icon);
  }

  

}
  return (
    <div className='container'>
        <div className='top-bar'>
          <input type="text" className='cityInput' placeholder='Search' />
          <div className='search-icon' onClick={()=>{search()}}>
          <img src={search_icon} alt="" />
          </div>
        </div>
        <div className='weather-image'>
          <img src={w_icon} alt="" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>

          <div className="element">
            <img src={wind_icon} alt="" />
            <div className="data">
              <div className="wind-speed">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>



        </div>
    </div>
  )
}

export default WeatherApp
