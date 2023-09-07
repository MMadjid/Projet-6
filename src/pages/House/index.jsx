import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import Rating from '../../components/Ratings';
import Collapse from '../../components/Collapse';
import Error from '../../components/Error';
import './index.scss';

function House() {
	const { houseId } = useParams();

	if (!localStorage.getItem(houseId)) {
		return <Error />;
	}

	const house = JSON.parse(localStorage.getItem(houseId));

	return (
		<main>
			<Slideshow pictures={house.pictures} />
			<div className="title-host-wrapper">
				<div className="title-tags-wrapper">
					<div className="title-wrapper">
						<h2>{house.title}</h2>
						<h3>{house.location}</h3>
					</div>
					<div className="tags-wrapper">
						{house.tags.map((tag, index) => (
							<div className="tag" key={`tag-${index}-${tag}`}>
								{tag}
							</div>
						))}
					</div>
				</div>
				<div className="host-rating-wrapper">
					<div className="host-wrapper">
						{house.host.name}
						<img src={house.host.picture} alt={`${house.host.name} profile`} />
					</div>
					<Rating rating={house.rating} />
				</div>
			</div>
			<div className="description-wrapper">
				<Collapse title="Description" content={house.description} />
				<Collapse
					title="Équipements"
					content={
						<ul className="equipments-wrapper">
							{house.equipments.map((equipment, index) => (
								<li key={`equipment-${index}-${equipment}`}>{equipment}</li>
							))}
						</ul>
					}
				/>
			</div>
		</main>
	);
}

export default House;
