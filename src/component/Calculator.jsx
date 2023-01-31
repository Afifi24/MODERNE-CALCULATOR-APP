import React,{useState} from 'react'
import styled from 'styled-components'
const Calculator = ({HandlerClick,setColorTheme,ColorTheme}) => {
  const [Input,setInput] = useState([])
   const SetValue =(e)=>{
    setInput((prev)=>prev+=e.target.value)
   }
   const DeleteBtn = ()=>{
    setInput(Input.slice(0,-1))
   }
   const Equal = ()=>{
    setInput(eval(Input))
   }
  
   const Reset = ()=>{
    setInput('')
  
   }

  return (
    <Calculatorstyle>  
     <div className="container">
     <div className='header'>
        <div className="head">
        <h4>calc</h4>
        <div className="switch-container">
          <h5>THEME</h5>
        <div className="switch">
          <div className="number">
          <small>1</small>
          <small>2</small>
          <small>3</small>
          </div>
        <div className='color-content'>
          <div className={ColorTheme==='theme1'?' circle active red':'circle  red'} onClick={()=>HandlerClick('theme1')} ></div>
          <div className={ColorTheme==='theme2'?' circle orange active':'circle orange'} onClick={()=>HandlerClick('theme2')}></div>
          <div className={ColorTheme==='theme3'?' circle active blue':'circle blue'} onClick={()=>HandlerClick('theme3')}></div>
        </div>
        </div>
        </div>
        </div>
        <input value={Input} className='inpt' type="text" />
        
      </div> 
       <main>
         <div className="number">
          <button onClick={SetValue} value={7}>7</button>
          <button onClick={SetValue} value={8}>8</button>
          <button onClick={SetValue} value={9}>9</button>
          <button onClick={DeleteBtn} className='del'>DEL</button>
         </div>
         <div className="number">
          <button onClick={SetValue} value={4} >4</button>
          <button onClick={SetValue} value={5}>5</button>
          <button onClick={SetValue} value={6}>6</button>
          <button onClick={SetValue} value={'+'}>+</button>
         </div>
         <div className="number">
          <button onClick={SetValue} value={1}>1</button>
          <button onClick={SetValue} value={2}>2</button>
          <button onClick={SetValue} value={3}>3</button>
          <button onClick={SetValue} value={'-'} >-</button>
         </div>
         <div className="number">
          <button onClick={SetValue}  value={'.'}>.</button>
          <button onClick={SetValue} value={0}>0</button>
          <button onClick={SetValue} value={'/'}>/</button>
          <button onClick={SetValue} value={'*'}>x</button>
         </div>
         <div className="reset">
          <button onClick={Reset} className='res'>RESET</button>
          <button onClick={Equal} className='equal'>=</button>
         </div>
       </main>
     </div>

    </Calculatorstyle>
  )
}

export default Calculator

const Calculatorstyle = styled.div`
display: flex;
justify-content: center;
.header{
  input{
    width: 22rem;
    height: 5rem;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: .5rem;
    font-weight: 700;
    font-size: 1.5rem;
  }
  h4{
    font-size: 1.2rem;
  }
  .head{
    display: flex;
    align-items: flex-end;
    margin-bottom: 1rem;
    justify-content: space-between;
    .color-content{
      display: flex;
      border-radius: 1rem;
      width: 3rem;
      height: 1.2rem;
      align-items: center;
      justify-content: space-around;
      .circle{
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        cursor: pointer;
      }
      .red{
        background-color: var(--key1-background-toggle);
        opacity: 0;
      }
      .orange{
        background-color: var(--key2-background-toggle-hover);
        opacity: 0;
      }
      .blue{
        background-color: var(--key3-background-toggle);
        opacity: 0;
      }
      .active{
        opacity: 1;
      }
    }
    .number{
      font-size: 0.7rem;
      padding:0rem 0.5rem ;
      margin-bottom: 0.2rem;
    }
  }
}
main{
  margin-top: 1rem;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3rem;
  gap: 1.3rem;
  width: 22rem;

  
}
.number{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  button{
   width: 4rem;
   height: 2.3rem;
   border: none;
   border-radius: 0.5rem;
   font-size: 1.4rem;
   font-weight: 700;
   transition: var(--transition);
   cursor: pointer;
   
  }
  .del{
    font-size: 1.2rem;
    /* background-color: var(  --blue-key-background); */
    /* box-shadow: 0px 3px var(--key1-shadow); */
    /* color: #fff; */
    &:hover{
/* background-color: var(  --blue-key-background-hover); */
    }
  }
}
.reset{
  width: 100%;
  display: flex;
  gap: 1rem;
  button{
    width: 50%;
    height: 2.4rem;
    font-size: 1rem;
    font-weight: 700;
    /* color: #fff; */
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
  }
  .res{
    font-size: 1rem;
    &:hover{
    }
  }
  .equal{
    font-size: 1rem;
  }
}
.switch-container{
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  h5{
    font-size: 0.7rem;
  }
}
/* MEDIA QUERIES */
@media screen and (max-width:400px) {
  .header{
    width: 16rem;
  input{
    width: 16rem;
    height:4rem ;
  }
  .head{
    .number{
      font-size: 0.7rem;
      padding:0rem 0.5rem ;
      margin-bottom: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  }
  main{
    width: 16rem;
    gap: 0.7rem;
    .number{
      gap: 0.5rem;
    }

  }
  .number{
  button{
   width: 3rem;
   height: 3rem;
   border: none;
   border-radius: 0.5rem;
  }}
}
`