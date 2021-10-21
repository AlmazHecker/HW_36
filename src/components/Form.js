import './Form.css'
import React, { useState } from 'react'
import Comment from './Comment'
function Form(props){

    const [name, setName] = useState('')
    const [text, setText] = useState('')
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


    var d = new Date()

    var res = [d.getHours(), d.getMinutes(), d.getSeconds()].map(function (x) {
    return x < 10 ? "0" + x : x
    }).join(":")

    console.log(res)

    function Submitchik(e){
        e.preventDefault();
        let data = {
            name: name,
            comment: text,
            date: res
        }

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
                <input type='text' onChange={(e) => TextChangeHandler(e)} value={text}/>

                <p>Date</p>
                <input type='date' onChange={(e) => DateChangeHandler(e)} value={date}/>
            </div>
            <button type='submit' onClick={(e) => {Submitchik(e)}}>add</button>
        </form>
        </div>

    )
}


export default Form;