import { useState } from 'react';
import { GlobalContext } from '../Context/Context';

const QuizBegin = () => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const {quizQuestions} = GlobalContext();

  return (
    <div className='questions_container flex_col'>
        <h3 className='question'>Q1. What is use of HTml?</h3>
        <div className='Options_block flex_col'>
            <button>Scripting</button>
            <button>Markup</button>
            <button>Scripting</button>
            <button>Hosting</button>
        </div>
        <div>
            <button>Next Question</button>
        </div>
    </div>
  )
}

export default QuizBegin;