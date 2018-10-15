import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';
import axios from 'axios';
import ListPost from './ListPost';
import NewPostForm from './NewPostForm';
import EditingPostForm from './EditingPostForm'

class ListBlogContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            editingPostId: null
        }
        this.addNewPost = this.addNewPost.bind(this)
        this.removePost = this.removePost.bind(this)
        this.editingPost = this.editingPost.bind(this)
        this.editPost = this.editPost.bind(this)
    }
    componentDidMount(){
        axios.get('api/v1/posts')
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch(error => console.log(error))
    }
    addNewPost(title, content){
        axios.post('api/v1/posts', { post: { title, content }})
        .then(response => {
            console.log(response)
            const posts = [ ...this.state.posts, response.data ]
            this.setState({posts})
        })
        .catch(error => {
            console.log(error)
        })
    }
    removePost(id) {
        axios.delete('/api/v1/posts/'+ id)
        .then(response => {
            const posts = this.state.posts.filter(
                post => post.id !== id
            )
            this.setState({posts})
        })
        .catch(error => console.log(error))
    }
    editingPost(id){
        this.setState({
            editingPostId: id
        })
    }
    editPost(id, title, content) {
        axios.put('/api/v1/posts/' + id, {
            post: {
                title,
                content
            }
        })
        .then(response => {
            console.log(response);
            const posts = this.state.posts;
            posts[id-1] = { id, title, content }
            this.setState(() => ({
                posts,
                editingPostId: null
            }))
        })
        .catch(error => console.log(error));
    }
  render() {
    return (
      <div className="list-blog-container">
        <Container>
            <NewPostForm onNewPost = {this.addNewPost} /> 
                {this.state.posts.map(post =>{
                    if (this.state.editingPostId === post.id){
                        return (<EditingPostForm 
                            post = {post}
                            key={post.id}
                            editPost={this.editPost}/>)
                    } else {
                        return (<ListPost post={ post }
                            key = { post.id }
                            onRemovePost = {this.removePost}
                            editingPost = { this.editingPost}/>)
                        }
                })}
        </Container>
      </div>
    )
  }
}
export default ListBlogContainer;
