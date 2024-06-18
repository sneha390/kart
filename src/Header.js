import React from 'react'
import './Header.css'
import logo from './Kartmize_transparent.png'
import { MdOutlineTroubleshoot } from "react-icons/md";
import { BiCart } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";


function Header() {
  return (
    <div className='header'>
        {/* LOGO */}
        <img className='header_logo' src={logo} alt="Kartmize Logo"/>
        {/* Serach Bar */}
        <div className='header_search'> 
        <input className='header_searchInput' type="text"/>
        <MdOutlineTroubleshoot className="header_searchIcon" />    
        </div>

        {/* Header Nav */}
        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_greet'>
                    Wellcome to our kartmize 
                </span>
            </div>

            <div className='header_option'>
                
                <span className='header_signInUp header_signUpIn'> <FaUser/>    Sign In/Up
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

            <div className='header_optionBasket'>
                <BiCart/>
                <span className='header_optionTwo header_basketCount'>0</span>

            </div>

        </div>

      
    </div>
  )
}

export default Header
