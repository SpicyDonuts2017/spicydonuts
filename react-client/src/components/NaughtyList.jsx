import React from 'react';
import NaughtyPerson from './NaughtyPerson.jsx'


var NaughtyList = (props) => {
	return (
		<div>
			<h3 className="naughtyTitle">Naughty</h3>
			<div className="whole-list">
				{props.info.map((el) =>
					<NaughtyPerson human={el} key={el.id} changing={props.click} deleting={props.remove}/>
				)}
			</div>
		</div>
	)

}

export default NaughtyList;