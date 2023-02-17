import { useState } from 'react';

export default function Accordion(props) {
  const { title, content } = props;
  const [isVisible, setVisible] = useState(false);

  return (
    <div>
      <div onClick={() => setVisible(!isVisible)}>
        <h3>{title}</h3>
        <div>{isVisible ? '-' : '+'}</div>
      </div>
      {isVisible && <p>{content}</p>}
    </div>
  );
}
