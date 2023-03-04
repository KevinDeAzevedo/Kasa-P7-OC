import { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRight from '../assets/right-arrow.svg';
import ArrowLeft from '../assets/left-arrow.svg';

export default function Slideshow(props) {
  const { picture } = props;
  const [index, setIndex] = useState(0);

  function prevClick() {
    return index === 0 ? setIndex(picture.length - 1) : setIndex(index - 1);
  }

  function nextClick() {
    return index >= picture.length - 1 ? setIndex(0) : setIndex(index + 1);
  }
  return (
    <div className="slidewrapper">
      {picture.length > 1 ? (
        <div>
          <div className="slidewrapper-buttons">
            <img onClick={prevClick} src={ArrowLeft} alt="Précédent" />
            <img onClick={nextClick} src={ArrowRight} alt="Suivant" />
          </div>
          <div className="slidewrapper-count">
            {index + 1}/{picture.length}
          </div>
        </div>
      ) : null}
      <div className="slidewrapper-images">
        <img src={picture[index]} alt="Aménagement intérieur" className="" />
      </div>
    </div>
  );
}

Slideshow.propTypes = {
  picture: PropTypes.array,
};
