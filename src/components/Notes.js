import React from 'react';

export const Notes = ({notes, onRemove}) => {

    return(
        <ul className='list-group'>
            {
            notes.map((note) =>{
                return(
                    <li 
                    className='list-group-item note'
                    key={note.id}>
                        <div>
                        <strong>{note.title}</strong>
                        <small>{note.date}</small>
                        </div>
                    <button 
                    type='button' 
                    className='btn btn-outline-danger btn-sm'
                    onClick={()=> onRemove(note.id)}>X</button>
                    
                    </li>
                )
            })
            }
            
        </ul>
    )
    }