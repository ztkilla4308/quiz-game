import React from 'react'
import '../styles/GamePoints.css'

function GamePoints({points}) {
    return (
        <div className='game-points'>
            <h3>
                Points: 
                <p>{points}</p>
            </h3>
        </div>
    )
}

export default GamePoints
