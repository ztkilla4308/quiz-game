import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
import MainScreen from './components/MainScreen'
import './styles/App.css'

function App() {
  const [gameInfo, setGameInfo] = useState('')
  const [gameFlag, setGameFlag] = useState('')
  const [ready, setReady] = useState(false)
  const [buttonsList, setButtonsList] = useState('')
  const [gamePoints, setGamePoints] = useState(0)
  const [gameSettings, setGameSettings] = useState('')
  async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all').then(
      (res) => res.json()
    )
    setGameInfo(response)
  }
  function startGame() {
    if (ready) {
      GetGameData(gameInfo)
    } else {
      setTimeout(() => {
        GetGameData(gameInfo)
      }, 2000)
    }
  }
  const game = useEffect(() => {
    fetchCountries()
  }, [])
  async function GetGameData(response) {
    let newResponse
    if (gameSettings != '') {
      newResponse = response.filter((str) => str.continents[0] === gameSettings)
    } else {
      newResponse = response
    }
    let random = Math.floor(Math.random() * (newResponse.length - 3))
    console.log(newResponse)
    const gameData = {
      country: newResponse[random].flags.png,
      info: [
        {
          value: 'correct',
          name: newResponse[random].name.common,
        },
        {
          value: 'wrong',
          name: newResponse[random + 1].name.common,
        },
        {
          value: 'wrong',
          name: newResponse[random + 2].name.common,
        },
        {
          value: 'wrong',
          name: newResponse[random + 3].name.common,
        },
      ],
    }
    const quizData = gameData.info.sort(() => Math.random() - 0.5)
    setGameFlag(gameData.country)
    setButtonsList(quizData)
    setReady(true)
  }
  function submitButton(x, list) {
    const quizButtons = document.querySelectorAll('.quiz-btn')
    quizButtons.forEach((button) => (button.disabled = true))
    x.target.style.transform = 'scale(1.07)'
    x.target.style.border = '3px solid white'
    if (
      x.target.innerHTML === list.find((iter) => iter.value == 'correct').name
    ) {
      setGamePoints(gamePoints + 2)
    } else {
      setGamePoints(gamePoints - 1)
    }
    quizButtons.forEach((button) => {
      if (
        button.innerHTML === list.find((iter) => iter.value == 'correct').name
      ) {
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
      x.target.style.border = 'none'
      x.target.style.transform = 'scale(1)'
      GetGameData(gameInfo)
    }, 1500)
  }
  function gameSettingsFunc(x) {
    setGameSettings(x.target.value)
  }
  return (
    <div className="App">
      <Routes>
        <Route
          index
          path="*"
          element={
            <MainScreen settingsFunc={gameSettingsFunc} start={startGame} />
          }
        />
        <Route
          path="/game"
          element={
            <Loading
              start={startGame}
              ready={ready}
              gameFlag={gameFlag}
              buttonList={buttonsList}
              submit={submitButton}
              points={gamePoints}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
