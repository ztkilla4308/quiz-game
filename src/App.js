import React, { useEffect, useState } from 'react'
import QuizGame from './components/QuizGame'
import './styles/App.css'

function App() {
  const [gameInfo, setGameInfo] = useState('')
  const [gameFlag, setGameFlag] = useState('')
  const [ready, setReady] = useState(false)
  const [buttonsList, setButtonsList] = useState('')
  const [gamePoints, setGamePoints] = useState(0)
  async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all').then(
      (res) => res.json()
    )
    setGameInfo(response)
    await GetGameData(response)
  }
  const game = useEffect(() => {
    fetchCountries()
  }, [])
  async function GetGameData(response) {
    let random = Math.floor(Math.random() * 245)
    const gameData = {
      country: response[random].flags.png,
      info: [
        {
          value: 'correct',
          name: response[random].name.common,
        },
        {
          value: 'wrong',
          name: response[random + 1].name.common,
        },
        {
          value: 'wrong',
          name: response[random + 2].name.common,
        },
        {
          value: 'wrong',
          name: response[random + 3].name.common,
        },
      ],
    }

    const quizData = gameData.info.sort(() => Math.random() - 0.5)
    setGameFlag(gameData.country)
    setButtonsList(quizData)
    setReady(true)
  }
  function submitButton(x) {
    const quizButtons = document.querySelectorAll('.quiz-btn')
    quizButtons.forEach((button) => (button.disabled = true))
    if (x.target.value === 'correct') {
      setGamePoints(gamePoints + 2)
    } else {
      setGamePoints(gamePoints - 1)
    }
    quizButtons.forEach((button) => {
      if (button.value === 'correct') {
        button.classList.add('correct')
      } else {
        button.classList.add('wrong')
      }
    })
    const timer = setTimeout(() => {
      quizButtons.forEach((button) =>
        button.classList.remove('correct', 'wrong')
      )
      quizButtons.forEach((button) => (button.disabled = false))
      GetGameData(gameInfo)
    }, 1500)
  }
  return (
    <div className="App">
      {ready ? (
        <QuizGame
          flag={gameFlag}
          buttonList={buttonsList}
          submit={submitButton}
          points={gamePoints}
        />
      ) : (
        <h3>Game loading....</h3>
      )}
      <h3>{gamePoints}</h3>
    </div>
  )
}

export default App
