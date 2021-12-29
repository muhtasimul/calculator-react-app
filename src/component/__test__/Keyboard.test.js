import {screen, render, fireEvent} from "@testing-library/react"
import Keyboard from "../Keyboard"
import {ContextProvider} from "../../Context"

const MockKeyboard = ()=>{
    return(
        <ContextProvider>
            <Keyboard/>
        </ContextProvider>
    )
}

describe('testing keyboard', ()=>{

    test('testing number of buttons',()=>{
        render(<MockKeyboard/>)
        const buttonElement = screen.getAllByRole('button')
        expect(buttonElement).toHaveLength(16)
    })

    test('testing input', ()=>{
        render(<MockKeyboard/>)
        const inputElement = screen.getByTestId('button-value-1')
        expect(inputElement.value).toBe("1")
    })

    test('testing display works', ()=>{
        render(<MockKeyboard/>)
        const inputElement = screen.getByTestId('button-value-1')
        const displayElement = screen.getByTestId('display')
        fireEvent.click(inputElement)
        expect(displayElement.innerHTML).toBe("1")
    })

    test('testing ce button', ()=>{
        render(<MockKeyboard/>)
        const buttonElement1 = screen.getByTestId('button-value-1')
        const displayElement = screen.getByTestId('display')
        const buttonElementClear = screen.getByTestId('clear')
        fireEvent.click(buttonElement1)
        expect(displayElement.innerHTML).toBe('1')
        fireEvent.click(buttonElementClear)
        expect(displayElement.innerHTML).toBe('0') 

    })

    test('testing display works', ()=>{
        render(<MockKeyboard/>)
        const buttonElement1 = screen.getByTestId('button-value-1')
        const buttonElementPlus = screen.getByTestId('plus')
        const buttonElement2 = screen.getByTestId('button-value-2')
        const buttonElementEqual = screen.getByTestId('equal')
        const displayElement = screen.getByTestId('display')
        fireEvent.click(buttonElement1)
        fireEvent.click(buttonElementPlus)
        fireEvent.click(buttonElement2)
        fireEvent.click(buttonElementEqual)
        expect(displayElement.innerHTML).toBe("3")
    })

})