import React from 'react'
import QuizGame from './QuizGame'

function Loading({ready, gameFlag, buttonList, submit, points}) {
    return (
        ready ? <QuizGame
        flag={gameFlag}
        buttonList={buttonList}
        submit={submit}
        points={points}
      /> : <h1>Game is loading....</h1>
    )
        }


export default Loading
