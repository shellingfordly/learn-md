import {  useCallback, useState } from 'react'

export default function UseCallbackComponent() {
  let [len, setLen] = useState(5)
  let [other, setOther] = useState(0)

  function addLen(){
    setLen(len++)
  }

  const addOther = useCallback(()=>{
    setOther(other++)
  })

  return (
    <div>
      <p>len：{len} </p>
      <p>other：{other} </p>
      <button onClick={addLen}>改变len</button>
      <button onClick={() => { setOther(len++) }}>改变与other</button>
      <Child addLen={addLen} addOther={addOther} />
    </div>
  )
}

function Child(props){
  console.log("child");
  const {addLen,addOther} = props
  return (
    <div>
      <button onClick={addLen}>Child-改变len</button>
      <button onClick={addLen}>Child-改变addOther</button>
    </div>
  )
}