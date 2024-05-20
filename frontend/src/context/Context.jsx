import { createContext } from "react";
import run from "../config/gemini";
export const Context =createContext()

const ContextProvider=(props)=>{

    const onSend=async(prompt)=>{
       await run(prompt)
    }

    onSend("what is react js")
    const contextValue={

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider