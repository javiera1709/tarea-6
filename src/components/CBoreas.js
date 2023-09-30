import React from 'react';
import FotoBoreas from './img/Foto Boreas.jpeg';

const CBoreas = () => {
  return (
    <div className="subject">
      <a href="/">
        <img src={FotoBoreas}/>
      </a>
      <h4>Boreas</h4>
      <p className="mail">boreas@alumnos.uai.cl</p>
    </div>
  );
}

export default CBoreas;

