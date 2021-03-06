import { useMemo, useState } from 'react'

export function UseFunComponent() {
  let [len, setLen] = useState(5)
  let [other, setOther] = useState(0)

  function memoData() {
    console.log("UseFunComponent");
    let count = 0
    for (let i = 1; i <= len; i++) {
      count++
    }
    return count
  }

  function fnData() {
    console.log("UseFunComponent");
    let count = 0
    for (let i = 1; i <= len; i++) {
      count++
    }
    return count
  }

  return (
    <div>
      <p>未使用useMemo：</p>
      <p>与len无关的数据：{other} </p>
      <p> 与len有关的数据： {fnData()} - {memoData}</p>
      <p>fnData: {fnData()}</p>
      <p>memoData: {memoData}</p>
      <button onClick={() => { setOther(other++) }}>改变与len无关的数据</button>
      <button onClick={() => { setLen(len++) }}>改变与len有关的数据</button>
    </div>
  )
}

export function UseMemoComponent() {
  let [len, setLen] = useState(5)
  let [other, setOther] = useState(0)

  const sum = useMemo(() => {
    console.log("UseMemoComponent");
    let count = 0
    for (let i = 1; i <= len; i++) {
      count++
    }
    return count
  }, [len])

  return (
    <div>
      <p>使用了useMemo：</p>
      <p>与len无关的数据：{other} ； 与len有关的数据： {sum}</p>
      <button onClick={() => { setOther(other++) }}>改变与len无关的数据</button>
      <button onClick={() => { setLen(len++) }}>改变与len有关的数据</button>
    </div>
  )
}