import React from 'react';
import NicePerson from './NicePerson.jsx'


var NiceList = (props) => {
	
	return (
		<div>
			<h3 className="niceTitle">Nice</h3>
			<div className="whole-list">
				{props.info.map((el) =>
					<NicePerson human={el} key={el.id} changing={props.click} updating={props.change}/>
				)}
			</div>
		</div>
	)

}

export default NiceList;