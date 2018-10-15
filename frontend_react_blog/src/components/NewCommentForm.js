import React from 'react';
import { Form, Segment,Button,Grid } from 'semantic-ui-react'

const NewCommentForm = ({onNewComment = f => f}) => {
    let _content, _post_id

    const submit = e => {
        e.preventDefault()
        onNewComment(_content.value, _post_id.value)
        _content.value = ''
        _post_id.value = ''
        _content.focus()
    }
    return (
        <Grid>
            <Grid.Column width={16}>
                <Segment>
                    <Form onSubmit = { submit }>
                        <Form.Field required>
                            <input ref = { input => _content = input } placeholder="Conteúdo..."/>
                        </Form.Field>
                        <Form.Field required>
                            <select ref = { select => _post_id = select } placeholder="Conteúdo..."/>
                            
                        </Form.Field>
                        <Button primary>Criar Comentário</Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
        
    )
}

export default NewCommentForm;