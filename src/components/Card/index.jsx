import { Link } from 'react-router-dom';
import './index.scss';

function Card(props) {
	const { house } = props;

	return (
		<Link to={`/house/${house.id}`} className="card" onClick={() => localStorage.setItem(house.id, JSON.stringify(house))}>
			<img src={house.cover} alt={house.title} />
			<div className="gradient-bg">
				<h2>{house.title}</h2>
			</div>
		</Link>
	);
}

export default Card;
