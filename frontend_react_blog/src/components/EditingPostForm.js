import React, { Component } from 'react';
import { Form, Segment,Button, Grid } from 'semantic-ui-react';

class EditingPostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.post.id,
      title: this.props.post.title,
      content: this.props.post.content
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    const { id, title, content } = this.state;
    this.props.editPost(id, title, content );
  }
  render() {
    return (
      <Grid>
        <Grid.Column width={16}>
         <Segment>
           <Form onSubmit = {this.handleSubmit}>
            <Form.Field required>
              <input name="title"
                  type="text"
                  placeholder ="Título..."
                  value={this.state.title}
                  onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field required>
              <input name="content"
                    type="text"
                    placeholder ="Conteúdo..."
                    value={this.state.content}
                    onChange={this.handleChange}/>
            </Form.Field>
            <Button primary>Editar Post</Button>    
           </Form>
         </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default EditingPostForm;
