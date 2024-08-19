import React from 'react';

export function Modal({ isOpen, onClose, caption }) {
  if (!isOpen) {
    return null;
  }

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        {}
        <img
          src="https://i.imgur.com/anM7JLU.jpeg"
          alt="moog"
        />
        {caption && <p className="modal-caption">{caption}</p>}
      </div>
    </div>
  );
}
