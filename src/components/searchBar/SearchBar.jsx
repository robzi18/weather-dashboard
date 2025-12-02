import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import './searchBar.css'

const SearchBar = (props) => {
    
  return (
    <section className='searchBar-container'>
          <form onSubmit={props.handlePlaceSearch} className='search-place'>

            <div className="search-wrapper">
                <input type="text"
                    name='search' className='search-field'
                    placeholder='Search a City...'
                />
                <IoSearchSharp className='search-icon' type='submit'/>
            </div>
            {/* <button type='submit'>Search</button> */}
        </form>
    </section>
  )
}

export {SearchBar}