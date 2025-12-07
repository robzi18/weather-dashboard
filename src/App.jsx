import React, { useEffect } from 'react'
import { useState } from 'react'
import { SearchBar } from './components/searchBar/SearchBar.jsx'
import {Dashboard} from './components/dashboard/Dashboard.jsx'
import { Main } from './components/2-Dashboard/Main/Main.jsx'
const myKey = import.meta.env.VITE_API_KEY;
function App() { 
  
  const [searchPlace, setSearchPlace] = useState("")
  const [dailyWeather,setDailyWeather] = useState({}) // CONTAINER FOR FETCHED DATA
  const [favorite,setFavorite] = useState(["Barcelona","Miami","Bali","Oslo"])
  const[isFav,setIsFav] = useState(false) // useful to fill the star yellow if
  const[favoriteWeather,setFavoriteWeather] = useState([]) // WEATHER FOR FAVORITE CITIES
  const [isCel,setIsCel] = useState(true) //SCALE CHECK IF IT IS CELSIUS 
  const [isFar,setIsFar] = useState(false) //SCALE CHECK IF IT IS FAHRENHEIT
  const [detailInfo,setDetailInfo] = useState(false) // USEFUL TO TRIGGER 2ND DASHBOARD
  const [isPerc,setIsPerc] = useState(true) // USEFUL IN CHART IF PRECIP OR TEMP
  const [isTemp,setIsTemp] = useState(false) // USEFUL IN CHART IF PRECIP OR TEMP


  //TO SHOW MORE WEATHER DATA FROM THE CLICKED FAVORITE CITY
    function showMoreCityWeather(){
      // console.log("Hello world");

    }
  //HANDLE SHOW MORE OR DETAILED INFO FROM THE SECOND DASHBOARD
  function showMore(){
    setDetailInfo(true)
  }  
  //HANDLE GO BACK TO MAIN DASHBOARD
  function goBackToMainDashboard(){
    setDetailInfo(false)
  }  

  // HANDLE PERCIPTATION OR TEMPRATURE GRAPH

    function handlePerc(){
        setIsPerc(true)
        setIsTemp(false)
      }
      function handleTemp(){
        setIsPerc(false)
        setIsTemp(true)
    }
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
    setIsCel(true)
  }
  function handleFar(){
    setIsCel(false)
    setIsFar(true)
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
           url = `${baseUrl}&q=${city}&days=7`
        }
        else{
          url = `${baseUrl}&q=${city}&days=7`
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
          detailInfo = {detailInfo}
          goBackToMainDashboard = {goBackToMainDashboard}
        />
{!detailInfo &&
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
          showMore = {showMore}
          showMoreCityWeather = {showMoreCityWeather}
          // date = {date}
        /> }

{detailInfo &&        <Main 
          location = {dailyWeather.location}
          forecast = {dailyWeather?.forecast}
          current = {dailyWeather.current}
          addToFavorite = {addToFavorite}
          favoriteWeather = {favoriteWeather}
          isFav = {isFav}
          handleCel = {handleCel}
          handleFar = {handleFar}
          isCel= {isCel}
          isFar = {isFar}
          isPerc = {isPerc}
          isTemp = {isTemp}
          handleTemp = {handleTemp}
          handlePerc = {handlePerc}

        />}
         
    </>
  )
}

export default App
