import React from 'react';

function TextInfo({ title, text }) {
	return (
		<div className="info">
			<span className="info-title">{title}</span>
			<span>{text}</span>
		</div>
	)
}

export default TextInfo;
