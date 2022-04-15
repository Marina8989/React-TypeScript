import React, {useState, FC} from 'react';
import {Notes} from './modules/note.module';
import './App.css';

interface Props {
  name: string;
  age: number;
  email: string
}

const Person: FC<Props> = ({name, age, email}) => {
  return (
    <>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{email}</h1>
    </>
  )
}

const App: FC = () => {
 
  return (
    <>
    <Person name='Tiffany' age={22} email='tiffany@gmail.com'/>
    </>
  );
}

export default App;
