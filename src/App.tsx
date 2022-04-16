import React, {FC} from 'react';
import Person from './Person';
import {HairColor} from './modules/note.module';

const App: FC = () => {
  return (
    <>
    <Person name='Tiffany' age={22} email='tiffany@gmail.com' hairColor={HairColor.Pink}/>
    </>
  );
}

export default App;
