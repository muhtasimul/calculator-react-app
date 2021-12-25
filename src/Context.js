import React, {useState} from "react";
const Context = React.createContext()

function ContextProvider({children}){

    const [calculatedValue, SetCalculatedValue] = useState(0)

    const calculate = (expression) =>{
        try{
            let val = Function('return '+expression)()
            SetCalculatedValue(val)
        }catch{
            return SetCalculatedValue('Error; Click CE')
        }

    }

    return(
        <Context.Provider value={{
            calculate, 
            calculatedValue,
            SetCalculatedValue
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}