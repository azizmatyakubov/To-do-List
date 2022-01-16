import React, { useState } from 'react'

import styled from 'styled-components'

import TodoItem from './TodoItem'



const TodoList = (props) => {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    const addButton = () => {
        if (todo.length > 0) {
        setTodos([{id: todos.length, title: todo, completed:false}, ...todos])
        setTodo('')
        }
    }

    return (
        <Wrapper>
            <TodoCategoryHeader>
                <CategoryIcon style={{ backgroundColor: props.color }}>
                    <i className={props.icon}/>
                </CategoryIcon>
                <Title>{props.title}</Title>
                <TodoInput value={todo} onChange={e=>setTodo(e.target.value)} />
                
                <AddTodo onClick={addButton} className='fas fa-plus' />
            </TodoCategoryHeader>
            {
                todos.map((item, index)=> (
                    <TodoItem color={props.color} todo={item} todos={todos} setTodos={setTodos} key={index}  />
                ))
            }
            
        </Wrapper>
    )
}

export default TodoList

const Wrapper = styled.div`
    background-color: #20212d;
    margin-bottom: 30px;
    border-radius: 20px;
    overflow: hidden;
`

const TodoCategoryHeader = styled.div`
    display: flex;
    align-items: center;
    background-color: #272833;
    height: 50px;
    padding: 15px 20px;

`

const CategoryIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 4px;
    margin-right: 10px;
`
const Title = styled.div`
    flex: 1;
    font-size: 18px;
    font-weight: 600;

`

const TodoInput = styled.input`
    height: 30px;
    font-size: 18px;
    outline: none;
    border: none;
    background-color: #20212d;
    color: #eee;
    border-radius: 4px;
    padding: 4px 10px;
    margin-right: 4px;
`


const AddTodo = styled.i`
    padding: 10px 16px;
    margin-right: -12px;
    border-radius: 4px;
    
    &:hover { 
        background-color: #20212d;
        transition: 0.3s;
    }
`

