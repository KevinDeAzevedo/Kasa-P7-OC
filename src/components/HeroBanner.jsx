import PropTypes from 'prop-types';

export default function HeroBanner(props) {
  const { title, image } = props;
  return (
    <section className="hero-banner">
      {title === undefined ? null : (
        <h1 className="hero-banner-title">{title}</h1>
      )}
      <div className="hero-banner-image">
        <img src={image} alt="Bandeau d'illustration de la page" />
      </div>
    </section>
  );
}

HeroBanner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
