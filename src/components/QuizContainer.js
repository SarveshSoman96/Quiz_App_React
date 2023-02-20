import React from 'react';
// import Quiz_data from "../Context";
import Quiz_info from './Quiz_info';

const QuizContainer = ({gameState, stateChange}) => {

    const ChangeGameState = () => {
        stateChange("start_quiz");
    };

  return (
    <div className="quiz_container">
      <h2>Welcome to the Game</h2>

      {gameState === "begin" ? null : <button type='button' className='start_btn' onClick={ChangeGameState}>Let's Start</button>}
      {gameState === "start_quiz" ? null : <div>Quiz Started</div>}

    </div>
  );
}

export default QuizContainer;