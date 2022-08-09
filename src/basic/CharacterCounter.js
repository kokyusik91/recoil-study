import {useRecoilState} from 'recoil';

import TextInput from './TextInput';
import CharacterCount from './CharacterCount';

import {initialState} from '../App';


function CharacterCounter(){
  const [modalState] = useRecoilState(initialState.modalState);
  console.log(modalState);

  return(
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}






export default CharacterCounter;