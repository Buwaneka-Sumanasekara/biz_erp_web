 // Set initial state
 
 export const initialState = {
     isRehydrated: false,//should false
 };
 
 export default function appReducer(state = initialState, action) {
     switch (action.type) {
         case "APP_STATE_LOADED":
             return {
                 ...state,
                 isRehydrated: true
             };
         default:
             return state;
     }
 }
 