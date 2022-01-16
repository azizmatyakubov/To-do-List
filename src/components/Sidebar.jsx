import React from 'react'

import styled from 'styled-components'

const Sidebar = (props) => {
    return (
        <Wrapper style={{width: `${props.sideBarToggle ? '300px' : '70px'}`}}>
            <Title>{props.sideBarToggle ? 'Collection' : 'C'}</Title>   
                <CategoryList>
                    {
                    props.todoList.map(item=>(
                        
                        <Category key={item.name}>
                            <CategoryIcon style={{backgroundColor: item.color}}>
                                <i className={item.icon} />
                            </CategoryIcon>
                            {
                                props.sideBarToggle && <span>{item.name}</span>
                            }

                        </Category>
                    ))
                    }
                </CategoryList>
            
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    min-height: calc(100vh - 70px);
    max-height: 1500px;
    background-color: #20212D;
    padding-left: 35px;
`

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    padding: 50px 0px;
`

const CategoryList = styled.div`
    margin-top: -16px;

`

const Category = styled.div`
    display: flex;
    align-items: center;
    margin: 4px -16px;
    padding: 10px 16px;
    border-radius: 4px;
    width: calc(100% - 32px);

    span {
        margin-left: 10px;
        font-weight: 500;
        font-size: 18px;
    }

    &:hover {
        background-color: #18181f;
        cursor: pointer;
    }
`

const CategoryIcon = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`