import React from 'react';

export default function Card(props) {
  const { title, image } = props;

  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt="" />
    </div>
  );
}
