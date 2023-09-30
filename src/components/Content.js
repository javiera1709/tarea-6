import React from 'react';

function Content() {
  return (
    <main className="content">
      <h2 className="subtitle">¡Conócenos haciendo click en nuestra foto!</h2>
      <div className="subjects">
        <div className="subject">
          <a href="/integrantes/boreas.html">
            <img src="/img/Foto Boreas.jpeg" alt="Foto Boreas" />
          </a>
          <h4>Boreas Duchens</h4>
          <p className="mail">bduchens@alumnos.uai.cl</p>
        </div>

        <div className="subject">
          <a href="/integrantes/javiera.html">
            <img src="/img/Foto Javi.HEIC" alt="Foto Javi" />
          </a>
          <h4>Javiera Marín</h4>
          <p className="mail">javiemarin@alumnos.uai.cl</p>
        </div>

        <div className="subject">
          <a href="/integrantes/emilio.html">
            <img src="/img/Foto Suazo.jpeg" alt="Foto Emilio" />
          </a>
          <h4>Emilio Suazo</h4>
          <p className="mail">emsuazo@alumnos.uai.cl</p>
        </div>
      </div>
    </main>
  );
}

export default Content;

