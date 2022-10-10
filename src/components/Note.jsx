import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({body, date, handleRemoveNote}) => {
    return (
        <div className='note'>
            <div className="note-body">
                <span>{body}</span>
            </div>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em' onClick={handleRemoveNote}/>
            </div>
        </div>
    );
};

export default Note;