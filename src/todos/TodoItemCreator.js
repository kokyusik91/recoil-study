import { useSetRecoilState } from "recoil"

import { initialState } from "../App";

import { useState } from "react";

function TodoItemCreator(){
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(initialState.todoListState);
    console.log(setTodoList);


  const addItem = ()=>{
    setTodoList((oldTodoList)=> {
      console.log("이전 리스트",oldTodoList);
      return [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]
    });
    setInputValue('');
  }

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem} >Add</button>
    </div>
  )
}

export default TodoItemCreator;

let id = 0;
function getId() {
  return id++;
}