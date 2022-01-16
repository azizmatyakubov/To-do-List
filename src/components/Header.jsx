import React from 'react'
import styled from 'styled-components'

const Header = (props) => {


    return (
        <Wrapper>
        <HeaderItem onClick={()=> props.setSideBarToggle(!props.sideBarToggle)} >
            <i className='fas fa-bars'/>
        </HeaderItem>
        <HeaderItem>
            <i className='fas fa-border-all'/>
            <span>
            Dashboard
            </span>
        </HeaderItem>
        <HeaderItem>
            <i className='fas fa-images'/>
            <span>
            Collections
            </span>
        </HeaderItem>

        <PlaceHolder />

        <HeaderItem>
            <Profile>
                <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHoUakMo2H2P2vObf7mi6sRLtlnRvL_N1xw&usqp=CAU'
                    alt='profile'
                />
            </Profile>
        </HeaderItem>

        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    height: 70px;
    align-items: center;
    background-color: #20212D;
    padding: 0 20px;
    -webkit-box-shadow: 0px 4px 15px 0px #121212;
    box-shadow: 0px 4px 15px 0px #121212;
    position: sticky;
    top: 0;
`

const HeaderItem = styled.div`
    color: #eee;
    padding: 10px 16px;
    border-radius: 4px;

    span {
        margin-left: 10px;
        font-weight: 500;
    }

    &:hover {
        background-color: #18181f;
        transition: 0.3s;
        cursor: pointer;
    }
`

const PlaceHolder = styled.div`
    flex: 1;
`

const Profile = styled.div`
        display: flex;
        align-items: center;

        img {
            height: 30px;
            border-radius: 50%;
        }
`
