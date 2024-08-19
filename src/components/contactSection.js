import React from 'react';

export function ContactSection({ visible }) {
  return (
    <div className={`content ${visible ? 'fade-in' : 'contact'}`}>
      <div className='contactStyle'>
        <h2> Contactez-moi </h2>
        <p>06 95 14 61 37
        <br />
        simicstef34@gmail.com
        <br />
        <a href="https://www.linkedin.com/in/stefan-simic-5204971b9/">Page LinkedIn</a></p>
        <h2> Téléchargez mes CV </h2>
        <p>
        <a href="/assets/cv.pdf" download="cv.pdf">Cliquez ici pour mon CV</a>
        </p>
      </div>
    </div>
  );
}
