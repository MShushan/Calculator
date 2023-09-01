 import './calculator.css'
const Calculator = () =>{
    return(
      <div id='calculatorContainer'>
      <div id='calculator'>
      <input  className='item1'  type='text' value='0'/>
      <button className='item2' type="button">C</button>
      <button className='item3' type="button">R</button>
      <button className='item4' type="button">/</button>
      <button className='item5' type="button">*</button>
      <button className='item6' type="button">7</button>
      <button className='item7' type="button">8</button>
      <button className='item8' type="button">9</button>
      <button className='item9' type="button">+</button>
      <button className='item10' type="button">4</button>
      <button className='item11' type="button">5</button>
      <button className='item12' type="button">6</button>
      <button className='item13' type="button">-</button>
      <button className='item14' type="button">1</button>
      <button className='item15' type="button">2</button>
      <button className='item16' type="button">3</button>
      <button className='item17' type="button">=</button>
      <button className='item18' type="button">0</button>
      <button className='item19' type="button">.</button>
    </div>
  </div>
       )
 }
  export default Calculator;