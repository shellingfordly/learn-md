import {  useState } from 'react'

export default function UseCallbackComponent() {
  let [len, setLen] = useState(5)
  let [other, setOther] = useState(0)

  function addLen(){
    setLen(len++)
  }

  return (
    <div>
      <p>len：{len} </p>
      <p>other：{other} </p>
      <button onClick={addLen}>改变len</button>
      <button onClick={() => { setOther(len++) }}>改变与other</button>
      <Child addLen={addLen} />
    </div>
  )
}

function Child(props){
  const {addLen} = props
  console.log("child");
  return (
    <div>
      <button onClick={addLen}>Child</button>
    </div>
  )
}