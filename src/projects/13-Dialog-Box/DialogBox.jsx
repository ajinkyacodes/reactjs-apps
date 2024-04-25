import React from 'react';
import Button from '../../components/Button';

export default function DialogBox({ width = 350 }) {
	return (
		<div className='card bg-light m-auto mt-4' style={{ width: 350 }}>
			<div className='card-body'>
				<div
					className='d-grid'
					style={{
						gridTemplateColumns: '2fr 1fr',
						alignItems: 'center',
						alignSelf: 'center',
						justifyContent: 'center',
					}}
				>
					<section>
						<h2 className='card-title'>title</h2>
						<h3 className='card-text'>text</h3>
					</section>
					<div>icon</div>
				</div>
			</div>
            <hr />
            <div className="d-flex mb-2 px-1 text-end">
                <Button text={"Cancel"} classes={"btn-light"} />
                <Button text={"Subscribe"} classes={"btn-danger"} />
                <Button text={"Unsubscribe"} classes={"btn-danger btn-block"} />
            </div>
		</div>
	);
}
