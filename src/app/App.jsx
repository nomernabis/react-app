import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from './actions/postActions'
import AddPost from './components/AddPost'
import Posts from './components/Posts'

const App = ({ dispatch }) => {
    return (
        <div>
            <AddPost />
            <Posts />
        </div>
    );
};

export default App;
