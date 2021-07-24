import InputField from "./InputField";
import './Form.css'
import { useRef} from "react";
const Form = (props) => {
    
    const btn = useRef()
    const ids = [1,2,3,4];
    const changeFocus = (id,fob) => {
       const currId = parseInt(id.split("")[1]);
       if(currId < 4 && fob === "front") {
           document.getElementById(`f${currId + 1}`).focus()
        }
        console.log(currId)
        if(currId < 5 && currId!== 1 && fob === "back") {
            document.getElementById(`f${currId - 1}`).focus()
        }
    }
    const sendData = (event) => {
        event.preventDefault();
        const v1 = document.getElementById('f1').value;
        const v2 = document.getElementById('f2').value;
        const v3 = document.getElementById('f3').value;
        const v4 = document.getElementById('f4').value;
        const ccNumber = `${v1} ${v2} ${v3} ${v4}`
        console.log(ccNumber.length)
        if(ccNumber.length < 19) {
            window.alert('Please enter 16 digit code')
            return
        }
        props.saveHandler(ccNumber)
    }


    const pasteEventHandler = () => {
        
        navigator.clipboard.readText()
        .then(
            (copiedText ) => {
                const [part1, part2, part3, part4] = copiedText.match(/(.|[\r\4]){1,4}/g)
                let parts = [];
                parts.push(part1, part2, part3, part4)
                for(let i = 0; i <4; i++) {
                    if(parts[i] !== undefined) {
                        document.getElementById(`f${i+1}`).value = parts[i]
                    }
                }
                document.getElementById(`f4`).focus()
            }
        )
        .catch(err => {
           console.log('something went wrong')
        })
      
    }
    return(
        <div className = "form-container">
            <form className = "inputForm">
                <div className = "form-group">
                    { 
                        ids.map(id => {
                            return <InputField 
                            inputId = {id} 
                            key = {id} 
                            onCharLimitReached = {changeFocus} 
                            processPasteEvent = {pasteEventHandler} 
                            />
                        })
                    }
                </div>
            </form>
            <button type = "submit"
            ref = {btn}
            onClick = {sendData}
            className = "submitBtn"
            >Save Card</button>
        </div>
    )
}
export default Form;