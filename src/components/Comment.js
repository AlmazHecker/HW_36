import './Comment.css'
import Form from './Form';
import React, { useState } from 'react';

function Comment(props){

    
    let DATA = []
  
    const [data, setData] = useState(DATA)
  
    function addToData(newData){
      setData([
        ...data,
        newData
      ])
    }

    return(
    <div>
        <Form add={addToData}/>
    {
        data.map(item => {
            console.log(item.date);
            return <div>
                    <p>{item.name}</p>
                    <p>{item.comment}</p>
                    <p>{item.date}</p>
                </div>
        })
    }
            
        </div>
    )
}

export default Comment;