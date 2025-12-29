import React, { useEffect } from "react";
import { useState } from "react";
import { SearchBar } from "./components/searchBar/SearchBar.jsx";
import { Dashboard } from "./components/dashboard/Dashboard.jsx";
import { Main } from "./components/2-Dashboard/Main/Main.jsx";
import { ErrorPage } from "./components/errorPage/ErrorPage.jsx";
import { FaHome } from "react-icons/fa";
import "./App.css";
const myKey = import.meta.env.VITE_API_KEY;
function App() {
  const [searchPlace, setSearchPlace] = useState("");
  const [dailyWeather, setDailyWeather] = useState({}); // CONTAINER FOR FETCHED DATA
  // const [favorite, setFavorite] = useState(["Barcelona", "Miami", "Bali"]); // FAVORITE CITIES LIST
  const [favorite, setFavorite] = useState(
    () =>
      JSON.parse(localStorage.getItem("favoriteCities") || "null") || [
        "Barcelona",
        "Miami",
        "Bali",
      ]
  );
  // FAVORITE CITIES LIST
  const [isFav, setIsFav] = useState(false); // useful to fill the star yellow if
  const [favoriteWeather, setFavoriteWeather] = useState([]); // WEATHER FOR FAVORITE CITIES
  const [isCel, setIsCel] = useState(true); //SCALE CHECK IF IT IS CELSIUS
  const [isFar, setIsFar] = useState(false); //SCALE CHECK IF IT IS FAHRENHEIT
  const [detailInfo, setDetailInfo] = useState(false); // USEFUL TO TRIGGER 2ND DASHBOARD
  const [isPerc, setIsPerc] = useState(true); // USEFUL IN CHART IF PRECIP OR TEMP
  const [isTemp, setIsTemp] = useState(false); // USEFUL IN CHART IF PRECIP OR TEMP
  const [error, setError] = useState(null); // ERROR HANDLING
  const [alert, setAlert] = useState(false);
  function resetFAV() {
    setFavorite([]);
    localStorage.removeItem("favoriteCities");
    console.log("successfully emptied the favs" + favorite);
  }

  //TO SHOW MORE WEATHER DATA FROM THE CLICKED FAVORITE CITY
  function showMoreCityWeather() {
    // console.log("Hello world");
  }
  //HANDLE SHOW MORE OR DETAILED INFO FROM THE SECOND DASHBOARD
  function showMore() {
    setDetailInfo(true);
  }
  //HANDLE GO BACK TO MAIN DASHBOARD
  function goBackToMainDashboard() {
    setDetailInfo(false);
  }

  // HANDLE PERCIPTATION OR TEMPRATURE GRAPH

  function handlePerc() {
    setIsPerc(true);
    setIsTemp(false);
  }
  function handleTemp() {
    setIsPerc(false);
    setIsTemp(true);
  }
  //HANDLE SEARCH PLACE FROM THE SEARCH BAR
  function handlePlaceSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const place = formData.get("search");
    setSearchPlace(place);
  }

  // HANDLE TOGGLE BETWEEN THE SCALES
  function handleCel() {
    setIsFar(false);
    setIsCel(true);
  }
  function handleFar() {
    setIsCel(false);
    setIsFar(true);
  }

  // RESPONSIBLE TO ADD/REMOVE THE PLACE TO A FAVORITE CITIES LIST
  function addToFavorite() {
    // TODO
    //style of the whole dashboard
    // making responsive

    const city = dailyWeather?.location?.name;
    if (!city) return;
    // console.log("is fav is " + isFav);
    if (!isFav) {
      setFavorite((prev) => [...prev, city]);
      setIsFav(true);
      // console.log("is fav is now => " + isFav);
      localStorage.setItem(
        "favoriteCities",
        JSON.stringify([...favorite, city])
      );
    } else {
      //IF THE FAV IS TRUE THAT MEANS CITY IS ON THE FAVORITE LIST SO USER WANTS TO DELETE IT!!
      setFavorite((prev) => prev?.filter((item) => item !== city));
    }
  }

  // USEEFFECT TO CHECK IF A CITY IS IN FAVORITE OR NOT THEN ON THE YELLOW STAR
  useEffect(() => {
    const city = dailyWeather?.location?.name;
    if (!city) return;
    setIsFav(favorite.includes(city)); // CHECK IF IT IS ON THE FAVORITE LIST
  }, [dailyWeather, favorite, isFav]);

  //FETCH WEATHER FUNCTION FOR ALL
  async function fetchWeather(city) {
    let baseUrl = `http://api.weatherapi.com/v1/forecast.json?key=${myKey}&alerts=yes`;
    let url = `${baseUrl}&q=${city}&days=7`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok || data.error) {
        return {
          error: true,
          type: "NOT_FOUND",
          message: data?.error?.message || "City not found",
        };
      }

      return { error: false, data };
    } catch (error) {
      return {
        error: true,
        type: "NETWORK",
        message: "Network error. Please try again.",
      };
    }
  }

  // USEEFFECT RESPONSIBLE TO FETCH SEARCHED/CURRENT PLACE

  useEffect(() => {
    const currentPlace = "Amsterdam";

    async function fetchCurrentWeather() {
      const city = searchPlace || currentPlace;
      const result = await fetchWeather(city); // CALL THE FETCH FUNCTION
      if (result.error) {
        setError({ type: result.type, message: result.message }); //
        return;
      }

      setError(null); //clear error
      setDailyWeather(result.data);
    }

    fetchCurrentWeather();
  }, [searchPlace, favorite]);

  // USE EFFECT FOR FETCHING WEATHER FOR FAVORITE CITIES THIS CITIES WILL BE SAVED IN SERVER/LOCAL STORAGE
  useEffect(() => {
    // INSIDE FUNCTION
    async function fetchFavCitiesWeather() {
      const randomCities = [...favorite]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
      // FETCH WEATHER FOR EACH RANDOM CITIES
      try {
        const responses = (
          await Promise.all(randomCities.map(fetchWeather))
        ).filter(Boolean);
        setFavoriteWeather(responses);
      } catch (error) {
        // console.log(error.message);
        return null;
      }
    }

    fetchFavCitiesWeather();
  }, [favorite, searchPlace]);

  // ===========END OF THE FAVORITE CITIES

  return (
    <>
      {!error && (
        <SearchBar
          handlePlaceSearch={handlePlaceSearch}
          detailInfo={detailInfo}
          goBackToMainDashboard={goBackToMainDashboard}
        />
      )}

      {!detailInfo && !error && (
        <Dashboard
          location={dailyWeather.location}
          forecast={dailyWeather.forecast}
          current={dailyWeather.current}
          addToFavorite={addToFavorite}
          favoriteWeather={favoriteWeather}
          alert={alert}
          isFav={isFav}
          handleCel={handleCel}
          handleFar={handleFar}
          isCel={isCel}
          isFar={isFar}
          showMore={showMore}
          showMoreCityWeather={showMoreCityWeather}
          resetFAV={resetFAV}
        />
      )}

      {detailInfo && !error && (
        <Main
          location={dailyWeather.location}
          forecast={dailyWeather?.forecast}
          current={dailyWeather.current}
          addToFavorite={addToFavorite}
          favoriteWeather={favoriteWeather}
          isFav={isFav}
          handleCel={handleCel}
          handleFar={handleFar}
          isCel={isCel}
          isFar={isFar}
          isPerc={isPerc}
          isTemp={isTemp}
          handleTemp={handleTemp}
          handlePerc={handlePerc}
        />
      )}
      {error && (
        <section className="error-message">
          <ErrorPage title={error.message} />

          {error.type === "NOT_FOUND" && (
            <ErrorPage message="Check spelling or try another city." />
          )}

          {error.type === "NETWORK" && (
            <ErrorPage message="Please check your internet connection." />
          )}
          <div className="backTo-main">
            <button
              className="go-back btn"
              onClick={() => {
                setError(null);
                setDetailInfo(false);
                setSearchPlace("");
              }}
            >
              GO BACK TO MAIN
            </button>
            <FaHome className="icon" onClick={goBackToMainDashboard} />
          </div>
        </section>
      )}
    </>
  );
}

export default App;
