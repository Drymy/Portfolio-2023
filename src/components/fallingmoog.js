import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Modal } from './modal.js'; 
import * as svgAssets from '../assets';

export function FallingMoog() {
  const isHelloDivCreated = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial state 
    gsap.set('#fallingMoog', { y: '100px', opacity: 0 });

    // Animation
    tl.to('#fallingMoog', {
      duration: 2,
      y: '0',
      opacity: 1,
      ease: 'back.out',
      delay: 5,
      onComplete: () => {
        if (!isHelloDivCreated.current) {
          const helloDiv = document.createElement('div');
          helloDiv.className = 'moogText';
          helloDiv.textContent = 'Cliquez-moi !';
          const parentDiv = document.getElementById('moogContainer');
          parentDiv.appendChild(helloDiv);
          isHelloDivCreated.current = true;

          // Animation for the text box
          gsap.from(helloDiv, {
            duration: 1,
            x: '50%',
            opacity: 0,
            ease: 'power3.out',
          });
        }
      },
    });

    // Start the animation
    tl.play();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="moogContainer" id="moogContainer">
      <div id="fallingMoog">

        <img
          src={svgAssets.Moog} 
          alt="MoogSVG"
          onClick={openModal}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} caption="Voici mon lapin Moog !" />

    </div>
  );
}
