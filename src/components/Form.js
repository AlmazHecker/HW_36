import './Form.css'
import React, { useState } from 'react'
import Comment from './Comment'
function Form(){

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState('')

    function NameChangeHandler(e){
        setDate(e.target.value)
    }
    function TextChangeHandler(e){
        setDate(e.target.value)
    }
    function DateChangeHandler(e){
        setDate(e.target.value)
    }

    function Submitchik(e){
        e.preventDefault();
        let data = {
            name: name,
            text: text,
            Date: new Date(date)
        }

        function giveData(){
            
        }

        setDate('')
        setName('')
        setText('')

    }


    return(
        <div>

        <form onSubmit={() => {Submitchik()}}>
            <div>
                <p>Name</p>
                <input type='text' onChange={() => {NameChangeHandler()}} value={name}/>
                
                <p>text</p>
                <input type='text' onChange={() => {TextChangeHandler()}} value={text}/>

                <p>Date</p>
                <input type='date' onChange={() => {DateChangeHandler()}} value={date}/>
            </div>
        </form>

            <Comment data={} />
        </div>
    )
}


export default Form;