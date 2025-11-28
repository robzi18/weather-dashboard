import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import './searchBar.css'

const SearchBar = () => {
  return (
    <section className='searchBar-container'>
          <form className='search-place'>

            <div className="search-wrapper">
                <input type="text"
                    name='search' className='search-field'
                    placeholder='Search a City...'
                />
                <IoSearchSharp className='search-icon'/>
            </div>
        </form>
    </section>
  )
}

export {SearchBar}