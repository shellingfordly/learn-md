import { Component, PureComponent, useCallback, useState } from 'react'

export default function UseCallbackComponent() {
  let [len, setLen] = useState(5)
  let [other, setOther] = useState(0)

  function addLen() {
    setLen(len++)
  }

  const addOther = useCallback(() => {
    setOther(other++)
  }, [other])

  return (
    <div>
      <p>len：{len} </p>
      <p>other：{other} </p>
      <button onClick={addLen}>改变len</button>
      <button onClick={() => { setOther(len++) }}>改变与other</button>
      <LenChild addLen={addLen} />
      <OtherChild addOther={addOther} />
    </div>
  )
}

class LenChild extends Component {
  render() {
    console.log("未适应useCallback - 关联数据len");
    const { addLen } = this.props
    return (
      <div>
        <button onClick={addLen}>Child-改变len</button>
      </div>
    )
  }
}

class OtherChild extends PureComponent {
  render() {
    console.log("useCallback PureComponent: other");
    const { addOther } = this.props
    return (
      <div>
        <button onClick={addOther}>Child-改变other</button>
      </div>
    )
  }
}