import React, { useState } from 'react';
import Popup from '../../components/Popup';
import Title from '../../components/Title';
import Button from '../../components/Button';

export default function PopupApp() {
	const [trigger, setTrigger] = useState(false);

	const triggerPopup = () => {
		console.log('trigger popup');
		setTrigger(true);
	};

	return (
		<div className='text-center'>
			<Title text={'Click for popup, or weight 3 seconds'} />
			<Button classes={'btn-primary'} onClick={triggerPopup} />
			{trigger && (
				<Popup
					type={'alert-info'}
					title={'Triggered Popup'}
					text={'This popup was triggered by a button'}
                    handleClose={setTrigger}
				/>
			)}
		</div>
	);
}
