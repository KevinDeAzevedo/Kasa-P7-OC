import StarActive from '../assets/star-active.svg';
import StarInactive from '../assets/star-inactive.svg';

export default function Rating(props) {
  const rating = props.rating;
  return (
    <div className="rating">
      {Array.from({ length: rating }, (_, i) => (
        <img key={i} src={StarActive} alt="*" />
      ))}
      {Array.from({ length: 5 - rating }, (_, i) => (
        <img key={i} src={StarInactive} alt="*" />
      ))}
    </div>
  );
}
