import { ADD_POST } from './actionTypes'

let id = 0;

const addPost = (title, text) => (
    {
        type: ADD_POST,
        text: text,
        title: title,
        id: id++
    }
)

export { addPost };
