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
        {/* Add your modal content here */}
        <img
          src="https://cdn.discordapp.com/attachments/928038965129392151/1159871616512163961/PXL_20210226_194643573.PORTRAIT2.jpg?ex=6532999e&is=6520249e&hm=537421b93a8fb2404bdc44b65a9d92a9901577a7cffaf3b7816b27185730c2a1&"
          alt="moog"
        />
        {caption && <p className="modal-caption">{caption}</p>}
      </div>
    </div>
  );
}
