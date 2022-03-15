import React, {useState} from 'react';
import {Notes} from './modules/note.module';
import './App.css';



function App() {
  const [notes, setNotes] = useState<Notes[]>([{
    id: 'one',
    text: 'This is the text',
    title: 'Title'
  }])

  const returnNotes = () => {
      return notes.map(note => {
        return (
          <div key={note.id}>
            <h4>{note.title}</h4>
            <h4>{note.text}</h4>
          </div>
        )
      })
  }
  return (
    <>
     <h2>test</h2>
     { returnNotes() }
    </>
  );
}

export default App;
