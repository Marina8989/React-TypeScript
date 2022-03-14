import React from 'react';
import {Note} from '../models/note.model';
import Notes from './Notes';

interface INotesListProps {
   notes: Note[]
}

const NotesList: React.FC<INotesListProps> = ({notes}) => {
    const renderNotesList = () => {
        return notes.map(note => {
            return <Notes key={note.id} note={note} />
        })
    }
    return (
        <>
          <h2>Notes</h2>
          { renderNotesList() }
        </>
    )
}

export default NotesList