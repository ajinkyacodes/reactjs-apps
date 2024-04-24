import React, {useRef, useEffect} from 'react';
import Title from '../../components/Title';
import { Progressbar } from '../../components/Progressbar';

export default function ProgressBarContainer() {
	const inputStyle = {
		width: 50,
		border: 'none',
		outline: 'none',
		textAlign: 'center',
		borderBottom: '1px solid lightgray',
	};

    const uiInput = useRef(null);

    useEffect(()=>{
        uiInput.current.focus();
    })

	return (
		<div className='container container-sm mx-auto text-center'>
			<Title text={'Progress Bars'} />
			<h2>Project Status:</h2>
			<ul>
				<li>
					UI Status:{' '}
					<input
						type='number'
						style={inputStyle}
                        ref={uiInput}
						value={''}
						onChange={(e) => console.log(e.target.value)}
					/>
				</li>
				<li>
					UX Status:{' '}
					<input
						type='number'
						style={inputStyle}
						value={''}
						onChange={(e) => console.log(e.target.value)}
					/>
				</li>
				<li>
					DATA Status:{' '}
					<input
						type='number'
						style={inputStyle}
						value={''}
						onChange={(e) => console.log(e.target.value)}
					/>
				</li>
			</ul>
            {/* Progress bars */}
            <Progressbar />
		</div>
	);
}
