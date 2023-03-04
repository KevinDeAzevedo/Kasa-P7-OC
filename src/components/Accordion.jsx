import { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowBot from '../assets/arrow-bot.svg';
import ArrowUp from '../assets/arrow-up.svg';

export default function Accordion(props) {
  const { title, content, style } = props;
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="accordion">
      <div
        onClick={() => setVisible(!isVisible)}
        className={`accordion-title accordion-title--${style}`}
      >
        <h3>{title}</h3>
        <div className="accordion-arrow">
          {isVisible ? (
            <img src={ArrowBot} alt="-" />
          ) : (
            <img src={ArrowUp} alt="+" />
          )}
        </div>
      </div>
      {isVisible && (
        <div className="accordion-content">
          {typeof content === 'string' ? (
            <p>{content}</p>
          ) : (
            <div>{content}</div>
          )}
        </div>
      )}
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  style: PropTypes.string,
};
