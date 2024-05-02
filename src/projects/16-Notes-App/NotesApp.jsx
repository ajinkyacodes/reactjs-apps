import React from 'react';
import NewNote from './NewNote';
import Button from '../../components/Button';

export default function NotesApp() {
	return (
		<div className='container'>
			<Button classes={'btn-info'} text={'+ New note'} />
			<div
				className='container container-sm d-flex'
				style={{ gap: 25, flexWrap: 'wrap' }}
			></div>
			<NewNote />
		</div>
	);
}
