import React, { useState } from 'react'
import uuid from 'react-uuid'

//Hämtar items och setItems från parent
const Form = ({ items, setItems }) => {
    //Här deklarerar jag useState och slipper skriva const 3 gånger 
    const [name, setName] = useState(''),
          [desc, setDesc] = useState(''),
          [charCheck, setCharCheck] = useState(false);
 
    //Två funktioner i förenklad arrow function form som ska ändra värden på namn och description
    const nameHandler = (event) => setName(event.target.value);
    const descHandler = (event) => setDesc(event.target.value);

    //Denna funktion har en event.preventDefault() för att föhindra knappen att utföra default funktionen
    const submitHandler = (event) => {
        event.preventDefault()
        //Om längden på namn och desc är längre än 3 så ska items lägga in i en state som befinner sig på Main.js och sedan tömma värden på state
        if(name.length >= 3 && desc.length >= 3 ) {
            setItems([...items, { id: uuid(), name: name, description: desc, completed: false }])
            setName('')
            setDesc('')
            setCharCheck(false)
        } else {
            setCharCheck(true)
        } 
    }
   

    return (
        //Här skriver jag jsx som skapar form designen. Varje element har en state eller funktion knyten till sig själva
        <form>
            <div className="mb-3">
                <input 
                    type='text' 
                    className="form-control" 
                    placeholder="Title"
                    value={name}
                    onChange={nameHandler} />
            </div>
            <div className="mb-4">
                <textarea 
                    className="form-control" 
                    placeholder="Description"
                    value={desc}
                    onChange={descHandler}
                 />
            </div>
            <div className="mb-3">
                <button className="btn btn-secondary w-100 p-3" onClick={submitHandler}>Create Task</button>
            </div>
            {
                //om true, visa röd error, annars visa ingenting
                charCheck ? <p style={{color: 'red'}}>Minimum 3 characters</p> : null
            }
        </form>
    )
}
export default Form