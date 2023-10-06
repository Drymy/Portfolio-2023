import React from 'react';
import * as svgAssets from '../assets';

export function DesignSection({ visible }) {
  return (
    <div className={`content ${visible ? 'fade-in' : 'design'}`}>
      <h2>Je maîtrise ces outils</h2>
      <div className='designIcons'>
        <img src={svgAssets.Photoshop} alt="Photoshop Logo"/>
        <img src={svgAssets.AfterEffects} alt="After Effects Logo"/>
        <img src={svgAssets.Premiere} alt="Premiere Logo"/>
        <img src={svgAssets.Illustrator} alt="Illustrator Logo"/>
        <img src={svgAssets.ExperienceDesign} alt="XD Logo"/>
      </div>
      <p>Fan de UX/UI, illustration, montage et animation, je suis très adepte de la gamme adobe. Vous pouvez retrouver mes travaux sur Behance ! </p>
      <p className='customLinks'><a href="https://www.behance.net/stefsimic" target="_blank" rel='noreferrer'>Cliquez ici pour y accéder.</a></p>
    </div>
  );
}
