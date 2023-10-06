import React from 'react';

export function HomeSection({ visible }) {
  return (
    <div className={`content ${visible ? 'fade-in' : 'home'}`}>
      <p> Enchanté ! Je m'appelle </p>
      <h2> STEFAN SIMIC </h2>
      <p> Je suis à la recherche d'un emploi en développeur front-end ou intégrateur web. Contactez-moi si vous aimez mon profil ! 
      <br/><br/> Cette application a été faite à l'aide de ReactJS. Utilisez les boutons ci-dessus pour naviguer et voir mes compétences.</p>
    </div>
  );
}