import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Values from 'values.js'
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const Container = styled.div`
font-size: 1rem;
margin: 0 7%;
max-width: 100%;
min-height: 100vh;

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
@media screen and (max-width: 400px){
  .hero-text{
    font-size: 1.1rem
  }
}
` 

const Home =()=>{
    return (
        <Container>
       <h1 className ='hero-text'>WEB DEV UTILITY APP</h1>
       <h4>Get your color shades and placeholder texts on the go</h4>
       <div className='main'>
       	<div style={{width: '80%', height: "60vh", transform: 'rotate(45deg)', background:"radialGradient: to left, 200, 140 220"}}></div>
       </div>
        </Container>
    )
}

export default Home