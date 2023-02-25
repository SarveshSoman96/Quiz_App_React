import React from 'react';
import { GlobalContext } from '../Context/Context';

const GameBegin = () => {
  const {changeGameStateHandler} = GlobalContext();

  return (
    <div div className='display_content'>
        <h2>Welcome to the Game</h2>
        <button className='quiz_start_btn' onClick={() => changeGameStateHandler("start_quiz")}>Start Quiz</button>
    </div>
  )
}

export default GameBegin;