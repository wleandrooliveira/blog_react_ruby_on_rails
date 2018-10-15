import React from 'react';
import { Form, Segment,Button, Grid } from 'semantic-ui-react';

const NewPostForm = ({onNewPost = f => f}) => {
    let _title, _content 
    const submit = e => {
        e.preventDefault()
        onNewPost(_title.value, _content.value)
        _title.value = ''
        _content.value = ''
        _title.focus()
    }
    return (
        <Grid>
            <Grid.Column width={16}>
                <Segment>
                    <Form onSubmit = { submit }>
                        <Form.Field required>
                            <input ref = { input => _title = input } placeholder="Título..."/>
                        </Form.Field>
                        <Form.Field required>
                            <textarea ref = { textarea => _content =textarea } placeholder="Conteúdo..."/>
                        </Form.Field>
                        <Button primary>Criar Post</Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
        
    )
}

export default NewPostForm;