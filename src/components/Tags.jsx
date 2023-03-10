import PropTypes from 'prop-types';

export default function Tags(props) {
  const tags = props.tags;

  return (
    <div className="tags">
      <ul>
        {tags.map((tag, index) => (
          <li key={`${tag}-${index}`}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.array,
};
