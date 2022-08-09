import {useRecoilState} from 'recoil';

import {initialState} from '../App';


function TodoItem({item}){
  // useState 같은 녀석임
  const [todoList, setTodoList] = useRecoilState(initialState.todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  // 이새끼 약간 useSelector 같은 녀석임;
  // const toDoListman = useRecoilValue(initialState.todoListState);


  const editItemText = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

   const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

   const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
     <div>
      <input type="text" value={item.text} onChange={editItemText}  />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

export default TodoItem

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}