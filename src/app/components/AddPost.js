import React, { Component } from 'react'
import { addPost } from '../actions/postActions'
import { connect } from 'react-redux'


const AddPost = ({ dispatch }) => {
    let input
    return(
        <div>
            <form onSubmit = { e => {
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatch(addPost(input.value))
                input.value = ''
            }}>
                <input ref={ node => input = node } />
                <button type="submit">
                    Add Post
                </button>
            </form>
        </div>
    );
}

export default connect()(AddPost)
