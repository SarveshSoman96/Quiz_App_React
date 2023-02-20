import './App.css';
import Navbar from "./components/Navbar";
import QuizContainer from "./components/QuizContainer";

function App() {

  return (
      <div className="App_container">
        <Navbar />
        <div className="quiz_block flex_std">
          <QuizContainer />
        </div>
      </div>
  );
}

export default App;
