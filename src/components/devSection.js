import React from 'react';
import * as svgAssets from '../assets';

export function DevSection({ visible }) {
  return (
    <div className={`content ${visible ? 'fade-in' : 'dev'}`}>
      <h2>J'utilise ces technologies</h2>
      <div className='devIcons'>
       <p><img src={svgAssets.HTML} alt="HTML Logo"/>
        <img src={svgAssets.CSS} alt="CSS Logo"/>
        <img src={svgAssets.Javascript} alt="Javascript Logo"/>
        <img src={svgAssets.React} alt="React Logo"/>
        <img src={svgAssets.Angular} alt="Angular Logo"/>
        <img src={svgAssets.Java} alt="Java Logo"/>
        <img src={svgAssets.PHP} alt="PHP Logo"/>
        <img src={svgAssets.Git} alt="Git Logo"/>
        <img src={svgAssets.Discord} alt="Discord Logo"/>
        <img src={svgAssets.VSCode} alt="VSCode Logo"/>
        <img src={svgAssets.Wordpress} alt="Wordpress Logo"/></p>
      </div>
      <p>Je suis autodidacte et j'aime toujours apprendre donc je ne suis pas fermé à l'idée d'étudier d'autres langages ou outils! Pourquoi ne pas visiter mon Github?</p>
      <p className='customLinks'><a href="https://github.com/Drymy" target="_blank" rel='noreferrer'>Cliquez ici pour y accéder.</a></p>
    </div>
  );
}