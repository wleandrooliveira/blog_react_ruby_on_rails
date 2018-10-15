import React from 'react'
import { Segment,Button, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


const ListPost = ({post, onRemovePost=f=>f, editingPost=f=>f}) =>
    <Grid className ="single-post" key={post.id}>
        <Grid.Column width={16}>
            <Segment>
            <h4>#{post.id} - {post.title}</h4>
            <p>{post.content}</p>
            <Button inverted color='red' onClick={() => onRemovePost(post.id)}>Excluir Post</Button>
            <Button inverted color='green' onClick={() => editingPost(post.id)}>Editar Post</Button>
            <Button inverted color='blue' as={NavLink} to="/comments" name="Comentários">Comentar o Post</Button>
            </Segment>
        </Grid.Column>

    </Grid>

export default ListPost;
