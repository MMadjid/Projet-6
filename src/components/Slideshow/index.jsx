import { useState } from 'react';
import arrowLeft from '../../assets/images/arrow_left.png';
import arrowRight from '../../assets/images/arrow_right.png';
import './index.scss';

function Slideshow(props) {
	const { pictures } = props;
	const [activeIndex, setActiveIndex] = useState(0);

	function changePicture(direction) {
		let newIndex = 0;
		const slides = document.getElementsByClassName('slide');

		slides[activeIndex].classList.remove('active');

		newIndex = (((activeIndex + direction) % slides.length) + slides.length) % slides.length;
		setActiveIndex(newIndex);

		slides[newIndex].classList.add('active');
	}

	return (
		<div className="slideshow">
			{pictures.map((picture, index) => (
				<img className={index === 0 ? 'slide active' : 'slide'} src={picture} alt="Logement" key={`picture-${index}-${picture}`} />
			))}
			{pictures.length > 1 && (
				<div className="slideshow-interaction-wrapper">
					<div className="previous" onClick={() => changePicture(-1)}>
						<img src={arrowLeft} alt="Précédent" />
					</div>
					<div className="next" onClick={() => changePicture(1)}>
						<img src={arrowRight} alt="Suivant" />
					</div>
					<div className="slide-counter">
						{activeIndex + 1}/{pictures.length}
					</div>
				</div>
			)}
		</div>
	);
}

export default Slideshow;
