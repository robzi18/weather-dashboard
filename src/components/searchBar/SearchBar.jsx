import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import './searchBar.css'

const SearchBar = ({handlePlaceSearch , detailInfo,goBackToMainDashboard}) => {
    
  return (
    <section className='searchBar-container'>
          <form onSubmit={handlePlaceSearch} className='search-place'>

            <div className="search-wrapper">
                <input type="text"
                    name='search' className='search-field'
                    placeholder='Search a City...'
                />
                <IoSearchSharp className='search-icon' type='submit'/>
            </div>
            {/* <button type='submit'>Search</button> */}
        </form>
{detailInfo   &&     <div className="backTo-main">
          <button className='go-back btn' onClick={goBackToMainDashboard}>GO BACK TO MAIN</button>
          <FaHome className='icon' onClick={goBackToMainDashboard}/>
        </div>}
    </section>
  )
}

export {SearchBar}