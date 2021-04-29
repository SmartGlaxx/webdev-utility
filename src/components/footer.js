import React from 'react'
import styled from 'styled-components';

const FootDiv = styled.div`
    background: black;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -140px;
    height: 10vh;
    width: 100%;
    color: white;
    font-size: 0.9rem;    
    .name{
        color: #98f;
        margin-left: 10px
    }
    @media screen and (orientation: landscape){
    	height: 20vh
    }
    
`


const Footer = ()=>{
    return (
        <FootDiv>
            &copy; {new Date().getFullYear()}
            <span className='name'>Developed by Smart Egbuchulem</span>
        </FootDiv>
    )
}

export default Footer

