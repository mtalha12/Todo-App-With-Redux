import ActionTypes from '../Action/ActionTypes';

const INITIAL_STATE = {
    allUsersDetails: []
}

function addToDo(state = INITIAL_STATE, Action) {
    console.log('Action.Type', Action.type);
    switch (Action.type) {
        case ActionTypes.ADD_TODO: {
            // allUsersDetails = [...state.allUsersDetails]
            // allUsersDetails.push(actions.payload)
            const data = { ...Action.payload, id: (state.allUsersDetails.length + 1) }
            return { ...state, allUsersDetails: [...state.allUsersDetails, data] }
        }
        case ActionTypes.UPDATE_TODO: {
            console.log(Action.payload)
            const ALLUSERS = [...state.allUsersDetails]
            ALLUSERS[(Action.payload.userId)-1].userName= Action.payload.userName;
            ALLUSERS[(Action.payload.userId)-1].userWish= Action.payload.userWish;
           return { ...state, allUsersDetails : ALLUSERS}


        }
        case ActionTypes.DELETE_TODO: {
            const ALLUSERS = [...state.allUsersDetails]
            const DELETEUSER = Action.payload;
            console.log(DELETEUSER);
            const x = ALLUSERS.filter((value)=>{
                console.log(value)
                if(value.id !== DELETEUSER.id){
                   return true 
                }
            })
            console.log(x)
            return { ...state, allUsersDetails : x }
        }
        default: return state;
    }
}
export default addToDo