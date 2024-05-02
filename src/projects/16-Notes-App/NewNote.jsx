import React from 'react';
import { NoteStyle, Icons, DeleteIcon } from './NoteStyle';
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md';
export default function NewNote({note, onClick, text}) {
	return (
		<NoteStyle className='card'>
			<div className='card-header text-right'>
        <Icons>
          <MdOutlineNoteAlt />
          <DeleteIcon>
            <MdDeleteForever onClick={() => onClick(note.id)} />
          </DeleteIcon>
        </Icons>
			</div>
      <div className="card-body">
        <textarea style={{border: "none", outline: "none", width: "100%" }}>{text}</textarea>
      </div>
		</NoteStyle>
	);
}
