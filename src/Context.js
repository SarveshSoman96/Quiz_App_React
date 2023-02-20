import { createContext } from "react";
// import { reducer } from "./Reducers";

const QuizData = createContext();

// const initialState = {
//     gameState : "start",
//     gameScore: 0,
//     quiz_array: [
//         {
//             id: "1",
//             q1: "what is use of css?",
//             o1: ["styling", "structure", "design", "analysis"],
//             ans: "styling"
//         },
//         {
//             id: "2",
//             q1: "what is use of html?",
//             o1: ["styling", "structure", "design", "analysis"],
//             ans: "structure"
//         },{
//             id: "3",
//             q1: "what is use of Javascript?",
//             o1: ["styling", "structure", "design", "logic"],
//             ans: "logic"
//         }
//     ]
// };

// const [state, dispatch] = useReducer(reducer, initialState);

const AppContext = function ({ children }) {
    <QuizData.Provider value="Start">
        {children}
    </QuizData.Provider>;
};

export { QuizData, AppContext};