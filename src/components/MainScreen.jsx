import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MainScreen.css'
import logo from '../content/flags-start.jpg'

function MainScreen() {
    return (
        <div className='main-screen'>
            <div className='logo-container top'>
                <div className='backgroundF-top'></div>
                <img className='logo top' src={logo} alt='flags'/>
            </div>
            <h1 className='logo-name'>Guess the flag</h1>
                <Link className='start-button'to={'/game'} children='Play'/>
            <div className='logo-container bottom'>
                <div className='backgroundF'></div>
                <img className='logo bottom' src={logo} alt='flags'/>
            </div>
        </div>
    )
}

export default MainScreen
