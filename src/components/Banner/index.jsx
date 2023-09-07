import './index.scss';

function Banner(props) {
	const { picture, alt, title } = props;

	return (
		<div className="banner">
			<img src={picture} alt={alt} />
			<div className="dark-bg">{title && <h1>{title}</h1>}</div>
		</div>
	);
}

export default Banner;
