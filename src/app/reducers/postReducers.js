import { ADD_POST } from '../actions/actionTypes'

const postReducer = (state = {isFetching: false, posts: []}, action) => {
    switch (action.type) {
        case ADD_POST:
            const posts = [...state.posts, {id: action.id, text: action.text, title: action.title}]
            let newState = {...state, posts: post}
            return newState
            break
        default:
            return state
    }
}

export default postReducer
