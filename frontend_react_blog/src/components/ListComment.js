import React from 'react'

const ListComment = ({comment, onRemoveComment=f=>f, editingComment=f=>f}) =>
    <div className="single-comment" key={comment.id}>
        <h4>#{comment.id} - {comment.title}</h4>
        <p>{comment.content}</p>
        <button onClick={() => onRemoveComment(comment.id)}>Excluir Comentário</button>
        <button onClick={() => editingComment(comment.id)}>Editar Comentário</button>
        <hr/>
    </div>

export default ListComment;
