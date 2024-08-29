import React from 'react';
import './banner.css';

function Banner() {
  const text = 'Entregamos para TODO BRASIL';
  return (
    <div className="frete-banner">
      {text.split('').map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
        </span>
      ))}
    </div>
  );
}

export default Banner;