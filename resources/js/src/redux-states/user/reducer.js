export const initialState = {
    token:""
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
}
