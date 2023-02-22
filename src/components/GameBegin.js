import React from 'react';
import { GlobalContext } from '../Context/Context';

const GameBegin = () => {
  const {chageGameStateHandler} = GlobalContext();

  return (
    <>
        <h2>Welcome to the Game</h2>
        <button className='quiz_start_btn' onClick={() => chageGameStateHandler("start_quiz")}>Start Quiz</button>
    </>
  )
}

export default GameBegin;