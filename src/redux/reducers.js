import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from "./actionTypes"

const initialState = [
    {
        id: 0,
        name: "Alan Walker",
        email: "alan@gmail.com",
        number: 8745723657
    }
]


const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STUDENT:
            state = [...state, action.payload]
            console.log("reducer state", state);
            return state
        case EDIT_STUDENT:
            const updatedState = state.map(contact => contact.id === action.payload.id ? action.payload : contact)
            state = updatedState
            return state
        case DELETE_STUDENT:
            const filteredState = state.filter(contact => contact.id !== action.id)
            state = filteredState
            return state
        default:
            return state
    }
}

export default studentReducer;