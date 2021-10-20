import './Form.css'
import React, { useState } from 'react'
function Form(props){

    const [name, setName] = useState('')
    const [comment, setText] = useState('')
    const [date, setDate] = useState('')

    function NameChangeHandler(e){
        setName(e.target.value)
    }
    function TextChangeHandler(e){
        setText(e.target.value)
    }
    function DateChangeHandler(e){
        setDate(e.target.value)
    }

    function Submitchik(e){
        e.preventDefault();
        let data = {
            name: name,
            comment: comment,
            date: new Date(date).toLocaleString()
        }
        console.log(data);
        props.add(data)

        setDate('')
        setName('')
        setText('')

    }


    return(

        <div>

        <form onSubmit={() => {Submitchik()}}>
            <div>
                <p>Name</p>
                <input type='text' onChange={(e) => NameChangeHandler(e)} value={name}/>
                
                <p>text</p>
                <input type='text' onChange={(e) => TextChangeHandler(e)} value={comment}/>

                <p>Date</p>
                <input type='date' onChange={(e) => DateChangeHandler(e)} value={date}/>

                <button onClick={(e) => Submitchik(e)}>Add</button>
            </div>
        </form>
        </div>
    )
}


export default Form;