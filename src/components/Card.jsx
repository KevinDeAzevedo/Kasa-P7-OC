import PropTypes from 'prop-types';

export default function Card(props) {
  const { title, image } = props;

  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-image">
        <img src={image} alt="Aperçu de l'intérieur du logement" />
      </div>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
