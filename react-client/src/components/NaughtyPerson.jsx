import React from 'react';

var NaughtyPerson = (props) => {
	return (
		<div className="evilPerson">
			<div className="personName">{props.human.person}</div>
			<div className="gift">Present: {props.human.present}</div>
			<button className="changers" onClick={() => props.changing(props.human.id)}>They were Nice!!!</button>
			<button className="changers" onClick={() => props.deleting(props.human.id)}>Burn the Coal!</button>
		</div>
	)
}

export default NaughtyPerson;

// <div className="status">{props.human.status}</div>