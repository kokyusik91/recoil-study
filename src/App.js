import { RecoilRoot, atom} from 'recoil';

import TodoList from './todos/TodoList';


export const initialState = {
  textState : atom({
     key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '입력값',
  }),

  modalState : atom({
    key : 'modalState',
    default : false
  }),

  todoListState : atom({
    key : 'todoListState',
    default : []
  })
}




function App() {
    

  return (
    <RecoilRoot>
      <TodoList/>
        {/* <CharacterCounter/> */}
    </RecoilRoot>
  );
}

export default App;
