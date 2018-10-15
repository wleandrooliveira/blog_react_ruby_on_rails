import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';
import axios from 'axios';
import ListComment from './ListComment';
import NewCommentForm from './NewCommentForm';
import EditingCommentForm from './EditingCommentForm'

class ListCommentContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            editingCommentId: null,
        }
        this.addNewComment = this.addNewComment.bind(this)
        this.removeComment = this.removeComment.bind(this)
        this.editingComment = this.editingComment.bind(this)
        this.editComment = this.editComment.bind(this)
    }
    componentDidMount(){
        axios.get('api/v1/comments')
        .then(response => {
            console.log(response)
            this.setState({
                comments: response.data
            })
        })
        .catch(error => console.log(error))
    }
    addNewComment(content){
        axios.post('api/v1/comments', { comment: { content }})
        .then(response => {
            console.log(response)
            const comments = [ ...this.state.comments, response.data ]
            this.setState({comments})
        })
        .catch(error => {
            console.log(error)
        })
    }
    removeComment(id) {
        axios.delete('/api/v1/comments/'+ id)
        .then(response => {
            const comments = this.state.comments.filter(
                comment => comment.id !== id
            )
            this.setState({comments})
        })
        .catch(error => console.log(error))
    }
    editingComment(id){
        this.setState({
            editingCommentId: id
        })
    }
    editComment(id, content) {
        axios.put('/api/v1/comments/' + id, {
            comment: {
                content
            }
        })
        .then(response => {
            console.log(response);
            const comments = this.state.comments;
            comments[id-1] = { id, content }
            this.setState(() => ({
                comments,
                editingCommentId: null
            }))
        })
        .catch(error => console.log(error));
    }
  render() {
    return (
      <div className="list-comment-container">
        <Container>
            <NewCommentForm onNewComment = {this.addNewComment} /> 
                {this.state.comments.map(comment =>{
                    if (this.state.editingCommentId === comment.id){
                        return (<EditingCommentForm 
                            comment = {comment}
                            key={comment.id}
                            editComment={this.editComment}/>)
                    } else {
                        return (<ListComment comment={ comment }
                            key = { comment.id }
                            onRemoveComment = {this.removeComment}
                            editingComment = { this.editingComment}/>)
                        }
                })}
        </Container>
      </div>
    )
  }
}
export default ListCommentContainer;
