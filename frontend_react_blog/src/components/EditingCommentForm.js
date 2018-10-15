import React, { Component } from 'react';
import { Form, Segment,Button, Grid } from 'semantic-ui-react';

class EditingCommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        id: this.props.comment.id,
        content: this.props.comment.content
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    const { id, content } = this.state;
    this.props.editComment(id, content );
  }
  render() {
    return (
      <Grid>
        <Grid.Column width={16}>
         <Segment>
           <Form onSubmit = {this.handleSubmit}>
            <Form.Field required>
              <input name="content"
                    type="text"
                    placeholder ="Conteúdo..."
                    value={this.state.content}
                    onChange={this.handleChange}/>
            </Form.Field>
            <Button primary>Editar Commentário</Button>    
           </Form>
         </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default EditingCommentForm;
