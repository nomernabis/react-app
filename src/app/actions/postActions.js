import { ADD_POST } from './actionTypes'

let id = 0;

const addPost = text => (
    {
        type: ADD_POST,
        text: text,
        id: id++
    }
)

export { addPost };
