import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MainScreen.css'
import logo from '../content/flags-start.jpg'

function MainScreen({settingsFunc, start}) {
    function settingsHandler(x){
        settingsFunc(x)
    }
    function gameStart(){
        start()
    }
    return (
        <div className='main-screen'>
            <select className='settings' onChange={settingsHandler}>
                <option value=''>Whole world</option>
                <option value='Europe'>Europe</option>
                <option value='North America'>North America</option>
                <option value='South America'>South America</option>
            </select>
            <div className='logo-container top'>
                <div className='backgroundF-top'></div>
                <img className='logo top' src={logo} alt='flags'/>
            </div>
            <h1 className='logo-name'>Guess the flag</h1>
                <Link className='start-button'to={'/game'} children='Play' onClick={gameStart}/>
            <div className='logo-container bottom'>
                <div className='backgroundF'></div>
                <img className='logo bottom' src={logo} alt='flags'/>
            </div>
        </div>
    )
}

export default MainScreen
