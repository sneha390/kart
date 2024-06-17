import React from 'react'
import './Header.css'
import logo from './Kartmize_transparent.png'
import SearchIcon from "@mui/material/Search"

function Header() {
  return (
    <div className='header'>
        {/* LOGO */}
        <img className='header_logo' src={logo} alt="Kartmize Logo"/>

        {/* Serach Bar */}
        <div className='header_search'> 
        <input className='header_searchInput' type="text"/>
        </div>

        {/* Header Nav */}
        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionOne'>
                    Wellcome to our kartmize 
                </span>
                <span className='header_optionTwo'>
                    Sign In/Up
                </span>
            </div>

            <div className='header_option'>
                <span className='header_optionOne'>
                    Returns 
                </span>
                <span className='header_optionTwo'>
                    Orders 
                </span>

            </div>

            <div className='header_option'>
                <span className='header_optionOne'>
                    Your
                </span>
                <span className='header_optionTwo'>
                    ProKart
                </span>

            </div>

        </div>

      
    </div>
  )
}

export default Header
