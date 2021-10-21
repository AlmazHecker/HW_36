import './Comment.css'
import Form from './Form';
import React, { useState } from 'react';

function Comment(){

    
    let DATA = []
  
    const [data, setData] = useState(DATA)
  
    function addToData(newData){
      setData([
        ...data,
        newData
      ])
    }

    return(
    <div className='wrap'>
        <div className='form'>
            <Form add={addToData}/>
        </div>

        <div className='comment'>
        {
            data.map(item => {
                return <div>
                    <div>
                        <span className='Author'>{item.name}</span> 
                        • 
                        <span className='Time'>{item.date}</span>
                    </div>
                        <p>{item.comment}</p>
                    </div>
            })
        }
        </div>
            
    </div>
    )
}

export default Comment;