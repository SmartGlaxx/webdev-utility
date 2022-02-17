import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Values from 'values.js'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
//import Footer from '../components/footer'

const Container = styled.div`
font-size: 1rem;
max-width: 100%;
min-height: 40vh;
backgroundP: red;
box-sizing: border-box;
height:auto;
position: relative;

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
.hero-text-2{
	color: #ccf;

}
.inner-1{
	background: navy;
	width: 8rem;
	margin: 13rem 2rem;
	height: 8rem;
	transform: rotate(45deg);
	z-index: -1;
	background: linear-gradient(to right, 120,210, 120);
	animation: anim-1 1s ease-out
}
@keyframes anim-1{
	 0%{transform: rotate(-30deg)}}
	 100%{transform: rotate(35deg)}
}
.inner-2{
	background: green;
	width: 7.5rem;
	margin: 2rem 2rem;
	height: 7.5rem;
	margin-top:-10rem;
	transform: rotate(35deg);
	z-index: 1;
	background: linear-gradient(to right, 120,210, 120);
	animation: anim-2 1.5s ease-out
}
@keyframes anim-2{
	 0%{transform: rotate(-23deg)}}
	 100%{transform: rotate(25deg)}
}
.inner-3{
	background: red;
	width: 7rem;
	margin: 2rem 2rem;
	height: 7rem;
	margin-top:-10rem;
	transform: rotate(25deg);
	z-index: 2;
	background: linear-gradient(to right, 120,210, 120);
	animation: anim-3 2s ease-out
}
@keyframes anim-3{
	 0%{transform: rotate(-16deg)}}
	 100%{transform: rotate(25deg)}
}
.main{
	position:relative;
	
	top: 0;
	height: 20vh;
	z-index: -1;

}
.sub-text{
	color: aaf;
	height: 100px;
	position: absolute;
	top:8rem;
	padding-left: 0.5rem;
	text-align:left;
	font-size: 1.1rem;

}
hr{
	border: 1px solid #c77;
}
.subtext-1{
	top: 10rem;
	animation: anim-q 2s;
	width: 100%;
}
@keyframes anim-q{
	from{margin-left: -100%}
	to{margin-left: 0}
}
.subtext-2{
	top: 15rem;
	animation: anim-w 2s;
	width:  90%;
	margin-left: 10%
}
@keyframes anim-w{
	from{margin-left: -100%}
	to{margin-left: 10%}
}
.subtext-3{
	top: 20rem;
	animation: anim-e 2s;
	width: 80%;
	margin-left: 20%
}
@keyframes anim-e{
	from{margin-left: -100%}
	to{margin-left: 20%}
}
@media screen and (min-width: 600px){
	.inner-1{
	width: 9rem;
	margin: 15rem 4rem;
	height: 9rem;
	}
	.inner-2{
	width: 8.5rem;
	height: 8.5rem;
	}
	.inner-3{
	width: 8rem;
	height: 8rem;
	}
}
@media screen and (min-width: 900px){
	.inner-1{
	width: 11rem;
	margin: 20rem 4rem;
	height: 11rem;
	}
	.inner-2{
	width: 10rem;
	height: 10rem;
	}
	.inner-3{
	width: 9rem;
	height: 9rem;
	}
	.sub-text{
		margin-left: 30%;
		margin-top: -10rem;
		font-size: 1.2rem
	}
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
       <h1 className ='hero-text'>Smart's WEB DEV UTILITY APP</h1>
       <h4 className='hero-text-2'>Color shades, Placeholder texts and Images</h4>
       <div className='main'>
       	<div className='inner-1'>
       		<div className='inner-2'>
       			<div className='inner-3'></div>
       		</div>
       	</div>
       	<div className='sub-text'>
       		<div className='hero-subtexts subtext-1'>Generate shades for your favorite color.</div>
       		<hr />
       		<div className='hero-subtexts subtext-2'>Generate placeholder texts for your web design.</div>
       		<hr/>
       		<div className='hero-subtexts subtext-3'>Search through hundreds of thousands of free stock images.</div>
       	</div>     	
     	
       </div>
        </Container>
    )
}

export default Home
