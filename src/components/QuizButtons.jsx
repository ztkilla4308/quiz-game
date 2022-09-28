import React from 'react'
import '../styles/QuizBtns.css'

function QuizButtons({list, func}) {
    function submitButton(x){
        func(x)
    }
    return (
        <div className='quiz-btn-container'>
            {list.map((button, index) => {
              return (
                <button
                className='quiz-btn'
                key={index}
                value={button.value}
                children={button.name}
                onClick={submitButton}
                ></button>
              )
            })}
        </div>
    )
}

export default QuizButtons
