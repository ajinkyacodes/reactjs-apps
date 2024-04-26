import React, { useRef, useEffect } from 'react';
import Title from '../../components/Title';

export default function FilterContacts() {
	let inputSearch = useRef(null);
	useEffect(() => {
		inputSearch.current.focus();
	});
	return (
		<div className='text-center'>
			<Title text={'Filter Contacts App'} />
			<input
				type='text'
				placeholder='Search by first name'
				className='mb-2'
				style={{ padding: '.3rem .5rem' }}
				ref={inputSearch}
			/>
			<section
				className='d-flex'
				style={{ gap: 15, maxWidth: 1600, margin: 'auto' }}
			></section>
		</div>
	);
}
