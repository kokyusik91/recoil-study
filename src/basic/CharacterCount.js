import { useEffect } from 'react';
import {
  selector,
  useRecoilValue,
} from 'recoil';
import { v1 } from "uuid";

import {initialState} from '../App';

// get으로 무언가 값을 받는것 같다.
function CharacterCount() {
  useEffect(()=>{
    console.log("렌더링 👏🏿")
  })
  // selector 에서는 값을 return한다.
  const charCountState = selector({
    key: `charCounterState${v1()}`,
    get: ({get}) => {
    // textState라는 키값을 가져온다.
    const text = get(initialState.textState);
    console.log(text);

    return text.length;
  },
  
  })

  console.log(charCountState);

  const count = useRecoilValue(charCountState);

  console.log(count);
  return <>Character Count: {count}</>;
}

export default CharacterCount;