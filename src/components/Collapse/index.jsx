import { useState } from 'react';
import arrow from '../../assets/images/arrow.png';
import './index.scss';

function Collapse(props) {
	const { title, content } = props;
	const [isClosed, setIsClosed] = useState(true);

	return (
		<div className={isClosed ? 'collapse-wrapper closed' : 'collapse-wrapper'}>
			<div className="collapse-title" onClick={() => setIsClosed(!isClosed)}>
				<h2>{title}</h2>
				<img src={arrow} alt="arrow"></img>
			</div>
			<div className="content">{content}</div>
		</div>
	);
}

export default Collapse;
