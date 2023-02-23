import { useState } from 'react';
import { GlobalContext } from '../Context/Context';

const QuizBegin = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")

    const {quizQuestions , changeGameStateHandler} = GlobalContext();

    const nextQuestionHandler = () => {

      if(quizQuestions.ans === optionChosen){
        setQuestionNumber(questionNumber + 1)
      }

        else if(quizQuestions.length - 1  === questionNumber){
          changeGameStateHandler("End_quiz")
        }
    };

  return (
    <div className='questions_container flex_col'>
      <h2 className='question'>{quizQuestions[questionNumber].questionName}</h2>
      <div className='Options_block flex_col'>
        {
          quizQuestions[questionNumber].options.map(optionName => (
            <button key={optionName} className='options_btn' onClick={() =>  setOptionChosen(optionName)}>{optionName}</button>
          ))
        }
      </div>
        <div className='next-question-block'>
            <button type='button' className='options_btn next_question_btn' onClick={nextQuestionHandler}>Next Question</button>
        </div>
    </div>
  )
}

export default QuizBegin;