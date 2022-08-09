import { useRecoilValue } from "recoil"

import {initialState} from '../App';

import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

function TodoList(){
  // todoList는 할일 배열
  const todoList = useRecoilValue(initialState.todoListState);
  console.log("최상단 투두 리스트",todoList);
return(
  <>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
  </>
)

}

export default TodoList