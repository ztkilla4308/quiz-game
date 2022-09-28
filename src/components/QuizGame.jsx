import React from 'react'
import GamePoints from './GamePoints'
import QuizButtons from './QuizButtons'
import '../styles/QuizGame.css'

function QuizGame({flag, buttonList, submit,points}) {
    return (
        <div className='main-game'>
            <img src={flag}/>
            <QuizButtons list={buttonList} func={submit}/>
            <GamePoints points={points}/>
        </div>
    )
}

export default QuizGame
