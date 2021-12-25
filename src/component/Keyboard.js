import React, {useState, useContext} from 'react'
import { Context } from '../Context'


export default function Keyboard() {

    const [value, setValue] = useState("")
    const {calculate, calculatedValue, SetCalculatedValue} = useContext(Context)

    const inputValue =(event)=>{
        SetCalculatedValue(0)
        event.preventDefault()
        setValue(prev => prev + event.target.value)
    }

    
    const clearValue =(event)=>{
        event.preventDefault()
        setValue('')
        SetCalculatedValue(0)
    }

    const totalValue = (event) =>{
        event.preventDefault()
        calculate(value)
    }

 
    return (
        <div className="container">
            <div>
                <div className="calculator">
                    <div className="calculator-display">

                        {
                            calculatedValue === 0 ?
                            value === '' ? 0 : value
                            :
                            calculatedValue
                        }
                
                    </div>
                
        
                <form className="form">
                    <button
                        value="1"
                        onClick={inputValue}
                    >1</button>

                    <button
                        value="2"
                        onClick={inputValue}
                    >2</button>
                    <button
                        value="3"
                        onClick={inputValue}
                    >3</button>
                    <button
                        value="+"
                        onClick={inputValue}
                    >+</button>
                    <br />
                    <button
                        value="4"
                        onClick={inputValue}
                    >4</button>
                    <button
                     
                        value="5"
                        onClick={inputValue}
                    >5</button>
                    <button
                        value="6"
                        onClick={inputValue}
                    >6</button>
                    <button
                        value="-"
                        onClick={inputValue}
                    >-</button>
                    <br />
                    <button
                        value="7"
                        onClick={inputValue}
                    >7</button>
                    <button
                        value="8"
                        onClick={inputValue}
                    >8</button>
                    <button
                        value="9"
                        onClick={inputValue}
                    >9</button>
                    <button
                        value="*"
                        onClick={inputValue}
                    >*</button>
                    <br />
                    <button
                        onClick={totalValue}
                    >
                        =
                    </button>
                    <button
                        value="0"
                        onClick={inputValue}
                    >0</button>
                    <button
                        onClick={clearValue}
                    >CE</button>
                    <button>/</button>
                </form>
            </div>

         </div>
             
        </div>
       
    )
}
