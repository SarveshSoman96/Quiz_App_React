import { createContext, useContext , useReducer  } from "react";

const AppContext = createContext();

const initialState = {
    gameState: "game_start",
    score : 0,
    quizQuestions : [
        {
            id: 1,
            questionName: "What is use of HTML?",
            options: ["Styling","Scripting","Markup","Hosting"],
            ans: "Markup"
        },
        {
            id: 2,
            questionName: "What is use of CSS?",
            options: ["Scripting","Markup","Hosting","Styling"],
            ans: "Styling"
        },
        {
            id: 3,
            questionName: "What is use of JS?",
            options: ["Styling","Markup","Scripting","Hosting"],
            ans: "Scripting"
        },
        {
            id: 4,
            questionName: "What is use of Netlify?",
            options: ["Styling","Markup","Scripting","Hosting"],
            ans: "Hosting"
        }
    ]
};

const reducer = (state, {type, payload}) => {
    switch (type) {
        case "Change_State":
            return{
                ...state,
                gameState: payload,
            }
        case "Change_Score":
            return{
                ...state,
                score: state.score + payload
            }

        case "reset_score":
            return {
                ...state,
                score: 0
            }

        default:
           return state;
    }
};

const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const changeGameStateHandler = (changeToState) => {
        dispatch({
            type: "Change_State",
            payload: changeToState
        });
    };

    const changeScoreHandler = (increaseScore) => {
        dispatch({
            type: "Change_Score",
            payload: increaseScore
        });
    };

    const resetScoreHandler = () => {
        dispatch({
            type: "reset_score"
        })
    };
    
    return(
        <AppContext.Provider value={{...state , changeGameStateHandler , changeScoreHandler, resetScoreHandler}}>
            {children}
        </AppContext.Provider>
    );
};

const GlobalContext = () => {
    return(
        useContext(AppContext)
    )
};

export {AppContext, GlobalContext , ContextProvider };