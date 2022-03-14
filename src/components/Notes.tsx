import React from 'react';
import {Note} from '../models/note.model';
import {Card, Button} from 'react-bootstrap'
;
interface INotesProps {
   note: Note
}

const Notes: React.FC<INotesProps> = ({note}) => {
    return (
      <div className="mt-5">
        <Card>
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Text>{note.text}</Card.Text>
              <Card.Subtitle>{note.date}</Card.Subtitle>
              <Button className='mb-3' variant='danger'>Delete</Button>
            </Card.Body>
        </Card>
      </div>
    )
}

export default Notes