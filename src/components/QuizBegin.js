import { useState } from 'react';
import { GlobalContext } from '../Context/Context';

const QuizBegin = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")

    const {quizQuestions , changeGameStateHandler , changeScoreHandler} = GlobalContext();
    const classesForButton = `options_btn`

    const nextQuestionHandle = (e) => {
      try {
        if(optionChosen === quizQuestions[questionNumber].ans){
          changeScoreHandler(1)
        }
        setQuestionNumber(questionNumber + 1)
        
        if((optionChosen === quizQuestions[questionNumber].ans) && (questionNumber + 1 === quizQuestions.length)){
          changeGameStateHandler("End_quiz")
        }
        
      } catch (error) {
          console.log(error.message)
      }

      
    };


  return (
    <div className="questions_container flex_col">
      <h2 className="question">{quizQuestions[questionNumber].questionName}</h2>
      <div className="Options_block flex_col">
        {quizQuestions[questionNumber].options.map((optionName) => (
          <button
            key={optionName}
            className={classesForButton}
            value={optionName}
            onClick={(e) => {
              setOptionChosen(e.target.value);
              console.log(e.target.value)
            }}
          >
            {optionName}
          </button>
        ))}
      </div>
      <div className="next-question-block">
        
        <button
          className="options_btn next_question_btn"
          onClick={nextQuestionHandle}
        >
         Next Question
        </button>
      </div>
    </div>
  );
}

export default QuizBegin;