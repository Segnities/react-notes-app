import React from 'react';

const NoteList = ({notes, handleAddNote, handleRemoveNote}) => {
    return (
        <div className='note-list'>
            {
                notes.map()
            }
        </div>
    );
};

export default NoteList;