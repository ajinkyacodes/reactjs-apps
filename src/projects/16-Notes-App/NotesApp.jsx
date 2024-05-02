import React, { useState } from 'react';
import NewNote from './NewNote';
import Button from '../../components/Button';
import { v4 as uuidv4 } from 'uuid';
export default function NotesApp() {
	const [notes, setNotes] = useState([]);

	const addNewNote = (newNote) => {
		const newNotes = [...notes, newNote];
		newNotes.filter((none) => !notes.id && (notes.id = uuidv4()));
		setNotes(newNotes);
	};

    const deleteNote = (id)=>{
        setNotes(notes.filter((note)=>note.id!==id));
    }

	return (
		<div className='container'>
			<Button classes={'btn-info'} text={'+ New note'} onClick={addNewNote} />
			<div
				className='container container-sm d-flex'
				style={{ gap: 25, flexWrap: 'wrap' }}
			></div>
			{notes.map((note) => (
				<NewNote key={note.id} note={note} onClick={deleteNote} />
			))}
		</div>
	);
}
