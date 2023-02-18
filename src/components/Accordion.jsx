import { useState } from 'react';
import ArrowBot from '../assets/arrow-bot.svg';
import ArrowUp from '../assets/arrow-up.svg';

export default function Accordion(props) {
  const { title, content } = props;
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="accordion">
      <div onClick={() => setVisible(!isVisible)} className="accordion-title">
        <h3>{title}</h3>
        <div>
          {isVisible ? (
            <img src={ArrowBot} alt="-" />
          ) : (
            <img src={ArrowUp} alt="+" />
          )}
        </div>
      </div>
      {isVisible && <p className="accordion-content">{content}</p>}
    </div>
  );
}
