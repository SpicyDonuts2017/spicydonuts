import React from 'react';

var NicePerson = (props) => {
	return (
		<div className="goodPerson">
			<div className="personName">{props.human.person}</div>
			<div className="gift">Present: {props.human.present}</div>
			<button className="changers" onClick={() => props.changing(props.human.id)}>They messed up!!!</button>
			<button className="changers" onClick={() => props.updating(props.human.id)}>Change Presents!</button>
		</div>
	)
}

export default NicePerson;

// <div className="status">{props.human.status}</div>