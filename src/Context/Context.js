import { createContext, useContext , useReducer  } from "react";

const AppContext = createContext();

const initialState = {
    gameState: "game_start",
    score : 0,
    quizQuestions : [
        {
            id: 1,
            q1: "What is use of HTml?",
            o1: "Styling",
            o2: "Scripting",
            o3: "Markup",
            o4: "Hosting",
            ans: "Markup"
        },
        {
            id: 1,
            q1: "What is use of CSS?",
            o1: "Styling",
            o2: "Scripting",
            o3: "Markup",
            o4: "Hosting",
            ans: "Styling"
        },
        {
            id: 1,
            q1: "What is use of JS?",
            o1: "Styling",
            o2: "Scripting",
            o3: "Markup",
            o4: "Hosting",
            ans: "Scripting"
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
    
        default:
           return state;
    }
};

const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const chageGameStateHandler = (changeToState) => {
        dispatch({
            type: "Change_State",
            payload: changeToState
        });
    };
    
    return(
        <AppContext.Provider value={{...state , chageGameStateHandler}}>
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