import React, {useState, useEffect} from 'react';
import '../App.css';
import Values from 'values.js'
import styled from 'styled-components';
import {FaRegCopy, FaSearch} from 'react-icons/fa'
import {Color} from '../components/color'


const Container = styled.div`
font-size: 1.4rem;
margin: 0 7%;
 max-width: 100vw;
 min-height: 100vh;
 ${'' /* background: #3c40c6; */}
 color: white;
${'' /* margin: 7.5vw; */}
.colorbox{
  margin-top: 2rem;
  max-width: 100vw;
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1.5rem;
}
.colorbox div{
  height: 150px;
  width: 150px;
  position: relative;
  box-shadow:
  0 4px 4.6px rgba(0, 0, 0, 0.014),
  0 10.5px 12.9px rgba(0, 0, 0, 0.023),
  0 22.2px 28.2px rgba(0, 0, 0, 0.031),
  0 42.6px 59.9px rgba(0, 0, 0, 0.044),
  0 71px 118px rgba(0, 0, 0, 0.07)
;

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
	font-size: 1.2rem;
  letter-spacing: 0.2rem;
  font-weight: 600
}
.copy{
  margin-top: 5%;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.5s
}
.copy:hover{
  opacity: 0.7;
  font-size: 1rem;
  color: green
}

.weight{
   margin-top: 82%;
   margin-right:50%;
   transform:translateX(50%);
   width: 100%
}
.copiednote{
    ${'' /* color: green;
    font-size: 1rem;
    font-weight: 600;
    z-index: 10;
    position: fixed;
    top: 0;
    width: 50vw;
    min-height: 100%;
    margin: 0 25vw; */}
     ${'' /* margin-top: 5vh; */}
    ${'' /* background: rgb(230,230,240,0.9);
    padding: 30%; */}
    ${'' /* transform: translateX(-50%);
    margin-left: 43%; */}
    ${'' /* border-radius: 5px;
    display: flex;
    justify-content: center;
    align-iten: center;
     box-sizing:border-box;
    animation: zoom1 1s  */}
}
${'' /* @keyframes zoom1{
    from{font-size: 1rem}
    to{font-size: 5rem; width: 100vw; height: 100vh; 
    margin: 0}
} */}
.box{
  color:red;
  display: block;
  align-items:center;
  justify-content:center;
  position: absolute;
  margin-top: 50vh; 
  left: 0; 
  z-ndex: 10000;
  height: 100vh;
  width: 100vw;
}
.colorContainer{
  background: white;
  padding: 0.5rem
}
.error{
  border: 1px solid red
}
.errorMsg{
  font-size:0.9rem;
  color: #e34
}

@media screen and (max-width: 400px){
  .colorbox{
    ${'' /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 0.5rem; */}
    display: inline-block;
  }
  
  .colorbox div{
    height: 80px;
    width: 60vw;
  }
  .colorbox .hexVal{
    font-size: 0.9rem;
    	margin-top: 20%;
  }
  .colorbox span{
    font-size: 0.8rem
  }
   .weight{
   display: none
  }
}

@media screen and (max-width: 250px){
  .colorbox{
    display: inline-block;
  }
  .colorbox div{
    margin: 1vw;
    padding: 1rem;
    display: flex;
    width: 60vw;
   justify-content: center;
    align-items: center
  }
  .colorbox .hexVal{
    	margin-top: 40%;
  }
  .weight{
   ${'' /* margin-top: 50%; */}
   display: none
  }

}
` 

function App() {
  const [error, setError] = useState(false)
  const [color, setColor] = useState(``);
  const [list, setList] = useState(new Values('#edf').all(10))
  // const [copied, setCopied] = useState(false)
  // const [hex, setHex] = useState(0)

  const generateColor=(e)=>{
    setError(false)
    // setCopied(false)
    e.preventDefault()
    try{
      let newColor = new Values(color).all(10)
      setList(newColor)
    }catch(error){
      setError(true)
    }    
  }

  // const copiedFunc=(hex)=>{
  //     setHex(hex)
  //     setCopied(true)
  //   const timer = setTimeout(() => {
  //         setCopied(false)
  //     }, 4000);
  //     // return ()=>clearTimeout(timer)
  // }

  return (
    <Container>
      <form onSubmit={generateColor}>
      <h3>Generate Shades for your Color:</h3>
      <p className='info'>Only 3 or 6 character hexadecimal values are valid.</p>
      {/* {copied && <div className='copiednote' style={{background: `$#{hex}`}}>Color copied to clipboard</div>} */}
      <div className='form_box'>
        <input type='text' value={color} placeholder='#0256ff'
        onChange={(e)=>{setColor(e.target.value)}} className={`${error ? 'form-style error' : 'form-style' }`} />
        {/* <input type ='text' value={color} placeholder='#0256ff' onChange={(e)=>{setColor(e.target.value)}} className='form-style'/> */}
        <button className='form-btn' type='submit'>Generate</button>
        </div>
      </form>
      <p className='errorMsg'>{error && 'Invalid Input. Please refer to the placeholder text'}</p>
      <div className='colorbox'>
       {list.map((item, i) => {
         return <Color key={i} item={item} i={i} />
       })}        
      </div>
    </Container>
    
  );
}

export default App;