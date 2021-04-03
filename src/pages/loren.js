import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Values from 'values.js'
import styled from 'styled-components';

const Container = styled.div`
font-size: 1.4rem;
margin: 0 7%;
max-width: 100%;
min-height: 100vh;
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

const Loren =()=>{
    return (
        <Container>
        <h3>Generate fancy text for you web project</h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of 
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum.
        
        </Container>
    )
}

export default Loren