import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Values from 'values.js'
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const Container = styled.div`
font-size: 1.4rem;
margin: 0 7%;
max-width: 100%;
${'' /* margin: 7.5vw; */}
.colorbox{
  margin-top: 2rem;
  width: 85vw;
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
  
}
.colorbox div{
  height: 150px;
  width: 150px;
  position: relative

}
.colorbox span{
	position: absolute;
	top: 4px;
	right: 4px;
	font-size: 1rem;
}
.colorbox .hexVal{
	width:100%;
	height: 100%;
	margin-top: 60%;
	font-size: 1.3rem
}
.copy{
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.5s
}
.copy:hover{
  opacity: 0.3;
  font-size: 1rem
}
.error{
  border: 1px solid red
}
.errorMsg{
  font-size:0.9rem;
  color: #e34
}
` 

const Home =()=>{
    return (
        <Container>
       <h1>WEB DEV UTILITY APP</h1>
       <h4>Get your color shadesa and placeholder texts on the go</h4>
       
        </Container>
    )
}

export default Home