import axios from 'axios'
import React, { Component } from 'react'

export default class GetEx1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : []
      }
    }
    handle() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            this.setState({posts:response.data})
        })
    }

  render() {
    const {posts} = this.state
    return (
      <div>
      {posts.map((post) =>
        <ul key={post.id}><li>{post.title}</li></ul>
        )}
      <button onClick={this.handle}>get</button>
      </div>
    )
  }
}
