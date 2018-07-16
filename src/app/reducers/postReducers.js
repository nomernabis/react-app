import { ADD_POST } from '../actions/actionTypes'

const postReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POST:
            return [
                ...state,
                {id: action.id, text: action.text}
            ]
            break
        default:
            return state
    }
}

export default postReducer
