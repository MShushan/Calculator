import './calculator.css'
const Calculator = () =>{
    return(
      <div className='calculator'>
        <input type='text' className='calculator-header' value='0'/>
        <div className='calculator-buttons'>
        <button type="button" className='item7'>C</button>
        <button type="button" className='item8'>AC</button>
        <button type="button">/</button>
        <button type="button">*</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">+</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="item22" >=</button>
        <button type="button" className="item23">0</button>
        <button type="button" className="item24">.</button>
     </div>

</div>
    )
  }
  export default Calculator;