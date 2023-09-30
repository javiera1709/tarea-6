import React from 'react';
import FotoEmilio from './img/Foto Suazo.jpeg';

const CJaviera = () => {
  return (
    <div className="subject">
      <a href="/integrantes/Emilio">
        <img src={FotoEmilio} alt="Foto Emilio" />
      </a>
      <h4>Javiera Marín</h4>
      <p className="mail">javiemarin@alumnos.uai.cl</p>
    </div>
  );
}

export default CEmilio;
