import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from './actions/postActions'
import Posts from './components/Posts'

const App = ({ dispatch }) => {
    let input
    return (
        <div>
            <h1>Hello from my react component!</h1>
            <input ref={node => input = node } /><br />
            <button onClick={ (event) => {
                event.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatch(addPost(input.value))
                input.value = ''

            } }>DISPATCH ACTION</button><br />
            <Posts />
        </div>
    );
};

export default connect()(App);
