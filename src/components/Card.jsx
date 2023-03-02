import PropTypes from 'prop-types';

export default function Card(props) {
  const { title, image } = props;

  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
