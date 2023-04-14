import { useState  } from 'react';
import { GlobalContext } from '../Context/Context';

const QuizBegin = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const {quizQuestions , changeGameStateHandler , changeScoreHandler} = GlobalContext();

    // const classesForButton = `options_btn`;
    
    const nextQuestionHandle = (e) => {
      try {
        if(optionChosen === quizQuestions[questionNumber].ans){
          changeScoreHandler(1)
        }
        setOptionChosen("")
        setQuestionNumber(questionNumber + 1)
        
        if(questionNumber + 1 === quizQuestions.length){
          changeGameStateHandler("End_quiz")
        }
       
        
      } catch (error) {
          console.log(error.message)
      }

    };

    const quizDIsplayClasses = `questions_container display_content`

  return (
    <div className={quizDIsplayClasses}>
      <h2 className="question">{quizQuestions[questionNumber].questionName}</h2>
      <div className="Options_block flex_col">
        {quizQuestions[questionNumber].options.map((optionName) => (
          <button
            key={optionName}
            className={`options_btn ${optionChosen === optionName ? "transparent" : ""}`}
            value={optionName}
            onClick={(e) => {
              setOptionChosen(e.target.value);
            }}
          >
            {optionName}
          </button>
        ))}
      </div>
      <div className="next-question-block">
        
        <button
          className={`options_btn next_question_btn`}
          onClick={nextQuestionHandle}
        >
         {questionNumber + 1 === quizQuestions.length ? "End Quiz" : "Next Question"}
        </button>
      </div>
    </div>
  );
}

export default QuizBegin;