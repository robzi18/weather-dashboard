import React, { useEffect } from 'react'
import { useState } from 'react'
import { SearchBar } from './components/searchBar/SearchBar.jsx'
import {Dashboard} from './components/dashboard/Dashboard.jsx'
const myKey = import.meta.env.VITE_API_KEY;
function App() { 
  
  const [searchPlace, setSearchPlace] = useState("")
  const [dailyWeather,setDailyWeather] = useState({})
  const [favorite,setFavorite] = useState(["Barcelona","Miami","Bali","Oslo"])
  const[isFav,setIsFav] = useState(false)
  const[favoriteWeather,setFavoriteWeather] = useState([])
  const [isCel,setIsCel] = useState(true)
  const [isFar,setIsFar] = useState(false)


  //HANDLE SEARCH PLACE FROM THE SEARCH BAR
  function handlePlaceSearch(e){
    e.preventDefault();
    const formData = new FormData(e.target)
    const place = formData.get("search")
    setSearchPlace(place)
  }

  // HANDLE TOGGLE BETWEEN THE SCALES
  function handleCel(){
    setIsFar(false)
    setIsCel(!isCel)
  }
  function handleFar(){
    setIsCel(false)
    setIsFar(!isFar)
  }

  // RESPONSIBLE TO ADD THE PLACE TO A FAVORITE CITIES LIST
    function addToFavorite(){
      setFavorite((prev)=>[...prev,dailyWeather?.location?.name])
      setIsFav(!isFav)
    }

//FETCH WEATHER FUNCTION FOR ALL
    async function fetchWeather(city){
      let baseUrl = `http://api.weatherapi.com/v1/forecast.json?key=${myKey}`
      let url
      try{
        if(!searchPlace){
           url = `${baseUrl}&q=${city}&days=4`
        }
        else{
          url = `${baseUrl}&q=${city}&days=4`
        }      
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Failed to fetch weather data for the place");
        }
        const data = await response.json()
        return data
      }
      catch(error){
        console.log("There is an error !" + error.message)
        return null
      }
    }


// USEEFFECT RESPONSIBLE TO FETCH CHOOSEN/CURRENT PLACE
  useEffect(()=>{
    setIsFav(false)
    let currentPlace = "Amsterdam"

    //HANDLE FETCH 
    async function fetchCurrentWeather(){
      try{
        const city = searchPlace || currentPlace     
        const data = await fetchWeather(city)
        setDailyWeather(data)
      }
      catch(error){
        console.log("There is an error !" + error.message)
      }
    }
    fetchCurrentWeather()

  },[searchPlace])


// USE EFFECT FOR FETCHING WEATHER FOR FAVORITE CITIES THIS CITIES WILL BE SAVED IN SERVER/LOCAL STORAGE
  useEffect(()=>{

    // INSIDE FUNCTION 
    async function fetchFavCitiesWeather(){
      const randomCities = [...favorite].sort(()=> Math.random() - 0.5).slice(0,4)
      // FETCH WEATHER FOR EACH RANDOM CITIES
      try {
        const responses = (await Promise.all(randomCities.map(fetchWeather)))
                    .filter(Boolean);
      setFavoriteWeather(responses);
      }
      catch(error){
        console.log(error.message);
        return null
      }
    }
    
    fetchFavCitiesWeather()

  },[favorite,searchPlace])

    // ===========END OF THE FAVORITE CITIES


  return (
    <>
        <SearchBar 
          handlePlaceSearch={handlePlaceSearch}
        /> 
        <Dashboard 
          location = {dailyWeather.location}
          forecast = {dailyWeather.forecast}
          current = {dailyWeather.current}
          addToFavorite = {addToFavorite}
          favoriteWeather = {favoriteWeather}
          isFav = {isFav}
          handleCel = {handleCel}
          handleFar = {handleFar}
          isCel= {isCel}
          isFar = {isFar}
        />
         
    </>
  )
}

export default App
