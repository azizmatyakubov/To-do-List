import React, { useState, useEffect } from 'react'

import styled from 'styled-components'


const TodoItem = (props) => {

    const [editedTodo, setEditedTodo] = useState(props.todo.title)

    useEffect(() => {
        setEditedTodo(props.todo.title)
    }, [props.todo])

    const checkBoxHandler = () => {
        const currentTodoId = props.todo.id
        props.setTodos(props.todos.map(todo=>todo.id === currentTodoId ? {...todo, completed: !props.todo.completed} : todo))
        console.log(props.todos)
    }

    const deleteHandler = () => {
        const currentTodoId = props.todo.id
        props.setTodos(props.todos.filter(todo => todo.id !== currentTodoId))
    }

    const saveTodo = () => {
        const currentTodoId = props.todo.id
        props.setTodos(props.todos.map(todo=>todo.id === currentTodoId ? {...todo, title: editedTodo} : todo))
    }

    return (
        <TodoListItem>
            <Checkbox style={{color: props.color}} onClick={checkBoxHandler} className={props.todo.completed ? 'fas fa-check-circle' : 'far fa-circle' }/>
            <input value={editedTodo} style={{textDecoration: props.todo.completed ? 'line-through' : 'none', color: props.color }} onChange={e => setEditedTodo(e.target.value)} />
            {props.todo.title !== editedTodo && (<SaveTodo onClick={saveTodo} className='fas fa-check' /> )}
            <DeleteTodo onClick={deleteHandler} className='fas fa-trash-alt' />
        </TodoListItem>
    )
}

export default TodoItem

const TodoListItem = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    transition: 0.3s;

    input {
        flex: 1;
        font-size: 22px;
        outline: none;
        background: none;
        border: none;
        color: #eee;
    }
`

const Checkbox = styled.i`
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
`

const SaveTodo = styled.i`
    color: #42c732;
    padding: 10px 16px;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 14px;
    margin-right: -12px;

    &:hover {
        background-color: #2b6127;
        transition: 0.3s;
    }

`

const DeleteTodo = styled.i`
    color: #ff1605;
    padding: 10px 16px;
    margin-left: 14px;
    margin-right: -12px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #7e2601;
        transition: 0.3s
    }
`