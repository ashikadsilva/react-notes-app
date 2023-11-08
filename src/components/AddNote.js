import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const[textNote,setTextNote]=useState('');
    const characterLimit=200;
    
    const handleChange=(event)=>{
        if(characterLimit-event.target.value.length>=0){
        setTextNote(event.target.value);
        }
    }
    const handleSaveClick=()=>{
        if(textNote.trim().length>0){
            handleAddNote(textNote);
            setTextNote('');
        }
      }
    return (
        <div className='note new'>
            <textarea rows='8'
                cols='10'
                placeholder='Type to add a Note...'
                value={textNote}
                onChange={handleChange}>
            </textarea>
            <div className='note-footer'>
                <small>{characterLimit-textNote.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote