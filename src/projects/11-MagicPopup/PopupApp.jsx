import React, { useState, useEffect } from 'react';
import Popup from '../../components/Popup';
import Title from '../../components/Title';
import Button from '../../components/Button';

export default function PopupApp() {
	const [trigger, setTrigger] = useState(false);
	const [timeTrigger, setTimeTrigger] = useState(false);
	const [timeTriggerWarning, setTimeTriggerWarning] = useState(false);

	const triggerPopup = () => {
		console.log('trigger popup');
		setTrigger(true);
	};

	useEffect(() => {
		setTimeout(() => {
			setTimeTrigger(true);
		}, 3000);
        setTimeout(() => {
			setTimeTriggerWarning(true);
		}, 8000);
	}, []);

	return (
		<div className='text-center'>
			<Title text={'Click for popup, or weight 3 seconds'} />
			<Button classes={'btn-primary'} onClick={triggerPopup} />
			<Popup
				type={'alert-info'}
				title={'Triggered Popup'}
				text={'This popup was triggered by a button'}
				handleClose={setTrigger}
				trigger={trigger}
			/>
            <Popup
				type={'alert-danger'}
				title={'Time Triggered Popup'}
				text={'This popup was triggered by a delay'}
				handleClose={setTimeTrigger}
				trigger={timeTrigger}
			/>
            <Popup
				type={'alert-warning'}
				title={'Time Triggered Popup'}
				text={'This popup was triggered by a warning'}
				handleClose={setTimeTriggerWarning}
				trigger={timeTriggerWarning}
			/>
		</div>
	);
}
