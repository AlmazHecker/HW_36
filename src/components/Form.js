import './Form.css'
import React, { useState } from 'react'
function Form(props){

    const [name, setName] = useState('')
    const [text, setText] = useState('')

    function NameChangeHandler(e){
        setName(e.target.value)
    }
    function TextChangeHandler(e){
        setText(e.target.value)
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
        if(!name || !text || ''){
            return alert("Какое то поле осталось пустым :(")
        }
        props.add(data)

        setName('')
        setText('')

    }


    return(
        
        <form onSubmit={Submitchik}>
            <div>
                <p>Name</p>
                <input type='text' onChange={(e) => NameChangeHandler(e)} value={name}/>
                
                <p>Comment</p>
                <input type='text' onChange={(e) => TextChangeHandler(e)} value={text}/>

            </div>
            <button type='submit' onClick={Submitchik}>add</button>
        </form>

    )
}


export default Form;