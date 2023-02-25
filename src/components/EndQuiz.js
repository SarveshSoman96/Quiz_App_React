import { GlobalContext } from "../Context/Context";

const EndQuiz = () => {

  const {score, changeGameStateHandler} = GlobalContext();
 
  return (
    <div className="flex_col display_content">
      <p>You have finished Quiz</p>
      <p>Your score is : <b className="quiz_score">{score}</b></p>
      <button className="options_btn next_question_btn" onClick={() => changeGameStateHandler("game_start")}>Go to Home Page</button>
    </div>

  )
}

export default EndQuiz