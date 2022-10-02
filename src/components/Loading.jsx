import React from 'react'
import QuizGame from './QuizGame'

function Loading({ready, gameFlag, buttonList, submit, points, start}) {
  if(ready === false){
    start()
  }
    return (
        ready ? <QuizGame
        flag={gameFlag}
        buttonList={buttonList}
        submit={submit}
        points={points}
      /> : <h1 className='loading'>Game is loading....</h1>
    )
        }


export default Loading
