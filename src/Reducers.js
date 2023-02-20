export const reducer = ({type, payload}) => {
    switch (type) {
        case "change_game_state":
            return {
                ...state,
                gameState: payload
            };
            break;
        case "change_score" :
            return {
                ...state,
                gameScore: payload
            };
           break;
       default:
        return {...state}
            break;
    }
};

