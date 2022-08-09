import {
  useRecoilState,
} from 'recoil';

import {initialState} from '../App';

function TextInput(){
  const [text, setText] = useRecoilState(initialState.textState);
  const [modalState,setModalState] = useRecoilState(initialState.modalState);

    const onChange = (event) => {
    setText(event.target.value);
  };

  const handleClickModalState = ()=>{
    setModalState(true);
  }

   return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      <button onClick={handleClickModalState}>모달 스테이트 바꾸기</button>
    </div>
  );
}

export default TextInput;