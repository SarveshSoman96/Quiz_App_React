import { GlobalContext } from "../Context/Context";

const EndQuiz = () => {

  const {score, changeGameStateHandler} = GlobalContext();
 
  return (
    <>
      <h2>you have finished Quiz</h2>
      <p>Your score is : {score}</p>
      <button onClick={() => changeGameStateHandler("game_start")}>Go to Home Page</button>
    </>

  )
}

export default EndQuiz