import React, { useRef, useEffect } from 'react';
import Title from '../../components/Title';
import ContactsData from './Data.json';
import Contact from './Contact';

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
				style={{
					gap: 15,
					maxWidth: '1600px',
					margin: 'auto',
					flexWrap: 'wrap',
				}}
			>
				{ContactsData.map((contact) => (
					<Contact
						contact={contact}
						cardColor={'card-info'}
						textColor={'text-dark'}
					/>
				))}
			</section>
		</div>
	);
}
