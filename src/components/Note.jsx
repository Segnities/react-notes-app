import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({note, handleRemoveNote}) => {
    return (
        <div className='note'>
            <div className="note-body">
                <span>{note.body}</span>
            </div>
            <div className="note-footer">
                <small>{note.date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em' onClick={()=> handleRemoveNote(note.id)}/>
            </div>
        </div>
    );
};

export default Note;