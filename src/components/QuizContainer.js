import React from 'react';
import GameBegin from './GameBegin';
import { GlobalContext } from '../Context/Context';
import QuizBegin from './QuizBegin';
import EndQuiz from './EndQuiz';

const QuizContainer = () => {
  const {gameState} = GlobalContext();

  return (
    <div className="quiz_container">
      {gameState === "game_start" ? <GameBegin /> : null}
      {gameState === "start_quiz" ? <QuizBegin /> : null}
      {gameState === "End_quiz" ? <EndQuiz /> : null}
    </div>
  );
}

export default QuizContainer;