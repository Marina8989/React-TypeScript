import React, {useState} from 'react';
import {Note} from './models/note.model';
import Header from './components/Header';
import NotesList from './components/NotesList';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: 'Meetings',
    text: 'Hello, this is just a placeholder text',
    color: '#cccccc',
    date: (new Date).toString()
  }])

  return (
    <>
      <Header />
      <Container>
         <Row>
           <Col>
             <NotesList notes={notes}/>
           </Col>
         </Row>
      </Container>
    </>
  );
}

export default App;
