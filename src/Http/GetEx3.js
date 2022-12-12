import axios, { Axios } from 'axios'
import React, { Component } from 'react'

export default class GetEx3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts : []
      }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            this.setState({posts : response.data})
        })
    }
  render() {
    const {posts} = this.state
    return (
      <div>
      <table className="table-val" >
      <tr>
      <th>ID</th>
      <th>TITLE</th>
      <th>UserID</th>
      </tr>
      {posts.map((post) =>
      <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.userId}</td>
                </tr>
                )}
            </table>
      </div>
    )
  }
}
