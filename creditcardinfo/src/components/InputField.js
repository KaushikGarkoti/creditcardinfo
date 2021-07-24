import { useRef, useState } from 'react';
import './InputField.css';
const InputField  = (props) => {
    const [userInput, setUserInput] = useState()
    const changeHandler = event => {
        if(inputRef.current.value === "") {
            props.onCharLimitReached(id, 'back')
        } else if(inputRef.current.value < 999)
            setUserInput(event.target.value)
        else {
            props.onCharLimitReached(id, 'front')
        }
    }
    const pasteEventHandler = () => {
        props.processPasteEvent()
    }

    const id = `f${props.inputId}`;
    const inputRef = useRef()
    return (
       <input type="text" 
       pattern= "[0-9]"
       minLength = {4} 
       maxLength={4}
       className = "inputField" 
       id = {id} 
       onChange = {changeHandler}
       ref = {inputRef}
       disabled = {props.isTrue}
       autoFocus = {props.isTrue}
       onPaste = {pasteEventHandler}
       required = {true}
       >    
    </input>
    )
}
export default InputField;