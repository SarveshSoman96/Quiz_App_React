import React from 'react';
import { GlobalContext } from '../Context/Context';

const GameBegin = () => {
  const {changeGameStateHandler, resetScoreHandler} = GlobalContext();

  const handlerGameStateChange = () => {
    changeGameStateHandler("start_quiz")
    resetScoreHandler()
  };

  return (
    <div div className='display_content'>
        <h2>Welcome to the Game</h2>
        <button className='quiz_start_btn' onClick={handlerGameStateChange}>Start Quiz</button>
    </div>
  )
}

export default GameBegin;