import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log('posts', this.props.posts)
        const posts = this.props.posts.map(post => <li key={post.id}>{post.text}</li>)
        return (
            <ul>
              {posts}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    posts: state
})

export default connect(mapStateToProps)(Posts)
