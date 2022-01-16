import { useState } from 'react'

import styled from 'styled-components'

import Header from './components/Header'
import TodoList from './components/TodoList';
import Sidebar from './components/Sidebar';


function App() {

  const [sideBarToggle, setSideBarToggle] = useState(true)

  const todoList = [
    {
      name: 'Personal',
      color: '#fd76a1',
      icon: 'fas fa-user'
    },
    {
      name: 'Work',
      color: '#70c4be',
      icon: 'fas fa-briefcase'
    },


  ]

  return(
    <Wrapper>
      <Header sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle} />
        <Main>
          <Sidebar sideBarToggle={sideBarToggle} todoList={todoList} />
          <MainContent>
            <TodoContent>
              <Title>Dashboard</Title>
              <Greeting>Good morning, Aziz</Greeting>

              {/* TODO ITEM */}
              {
                todoList.map(item=>(
                  <TodoList key={item.name} title={item.name} color={item.color} icon={item.icon} />
                ))
              }

              
            </TodoContent>
          </MainContent> 
        </Main>
    </Wrapper>
  )
  

 
}

export default App;

const Wrapper = styled.div`
  background-color: #18181f;
  min-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  color: #eee;
`

const Main = styled.div`
  display: flex;
`

const MainContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  transition: 0.3s;
`

const TodoContent = styled.div`
  max-width: 700px;
  width: 100%;
`

const Title = styled.div`
  margin: 50px 0;
  font-size: 30px;
  font-weight: 700;
`

const Greeting = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 800;
`


