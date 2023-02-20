import { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import QuizContainer from "./components/QuizContainer";


function App() {
  const [gameState, setGameState] = useState("begin")

  return (
    <div className="App_container">
      <Navbar />
      <div className="quiz_block flex_std">
        <QuizContainer gameState={gameState} stateChange={setGameState} />
      </div>
    </div>
  );
}

export default App;
