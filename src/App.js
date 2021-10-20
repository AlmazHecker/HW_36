import Comment from './components/Comment'
import Form from './components/Form';
import React, { useState } from 'react';

function App() {

  let DATA = []
  
  const [data, setData] = useState(DATA)

  function addToData(newData){
    setData([
      ...data,
      newData
    ])
  }
  console.log(data);
  return (
    <div>
      <Form add={addToData}/>

      <Comment data={data} />
    </div>
  );
}

export default App;
