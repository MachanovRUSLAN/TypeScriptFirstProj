import React from 'react'

type IProps = {
  todo:string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  atMessage:()=>void
}

const Input:React.FC<IProps>=({todo, setTodo,atMessage})=>{
  return (
    <div>
    <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='text something...' />
    <button onClick={atMessage}>add</button>
    </div>
  )
}

export default Input