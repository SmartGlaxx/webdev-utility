import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Values from 'values.js'
import styled from 'styled-components';
import Footer from './footer'

const Container = styled.div`
font-size: 1.4rem;

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

function App() {
  const [error, setError] = useState(false)
  const [color, setColor] = useState(``);
  const [list, setList] = useState(new Values('#edf').all(10))


  const generateColor=(e)=>{
    setError(false)
    e.preventDefault()
    try{
      let newColor = new Values(color).all(10)
      setList(newColor)
    }catch(error){
      setError(true)
    }    
  }

  return (
    <Container>
      <form onSubmit={generateColor}>
      <h3>Generate Shades for your Color:</h3>
      <p className='info'>Only 3 or 6 character hexadecimal values are valid.</p>
        <input type='text' value={color} placeholder='#0256ff'
        onChange={(e)=>{setColor(e.target.value)}} className={`${error ? 'form-style error' : 'form-style' }`} />
        <button className='form-btn' type='submit'>Generate Shades</button>
      </form>
      <p className='errorMsg'>{error && 'Invalid Input. Please refer to the placeholder text'}</p>
      <div className='colorbox'>
       {list.map((item, i) => {
         const {hex, weight, rgb} = item
         const newRgb = rgb.join(',')
         console.log(newRgb)
         return  <div style={{backgroundColor: `#${hex}`, color: `${i > 10 ? 'white': 'black' }`}} >
         <span style={{color: `${i > 10 ? 'white': "black"}`}}>{weight}% {i> 10? 'darker': 'lighter'}</span>
         <div className='hexVal'>#{hex}
          <div className='copy' onClick={()=>{
            navigator.clipboard.writeText(hex)
          }}>copy</div>
         </div>
         </div>
       })}        
      </div>
      <Footer />
    </Container>
    
  );
}

export default App;
