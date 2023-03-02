import PropTypes from 'prop-types';

export default function Host({ name, picture }) {
  return (
    <div className="host">
      <p>{name}</p>
      <div className="host-avatar">
        <img src={picture} alt="Portrait de l'hôte" />
      </div>
    </div>
  );
}

Host.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
};

Host.defaultProps = {
  name: 'John Do',
  picture: '../logo192.png',
};
