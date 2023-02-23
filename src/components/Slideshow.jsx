import { useState } from 'react';

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
    <div>
      <button onClick={prevClick}>Précédent</button>
      <div>
        <img src={picture[index]} alt="Aménagement intérieur" />
        {index + 1}/{picture.length}
      </div>
      <button onClick={nextClick}>Suivant</button>
    </div>
  );
}
