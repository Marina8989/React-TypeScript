import React from 'react';
import {Note} from '../models/note.model';

interface INotesProps {
   note: Note
}

const Notes: React.FC<INotesProps> = ({note}) => {
    return (
      <div className="mt-5">
        <h2>{note.title}</h2>  
        <h4>{note.text}</h4>
      </div>
    )
}

export default Notes