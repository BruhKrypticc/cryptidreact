import React, { useEffect, useState } from 'react';
import './Modal.css';

const gameImages = {
  ironbound: ["https://github.com/BruhKrypticc/cryptidgames/blob/main/imgs/image%20%282%29.PNG?raw=true"],
  hideout: [
    "https://github.com/BruhKrypticc/cryptidgames/blob/main/imgs/image%20%283%29.PNG?raw=true",
    "https://github.com/BruhKrypticc/cryptidgames/blob/main/imgs/image%201%20%282%29.PNG?raw=true",
    "https://github.com/BruhKrypticc/cryptidgames/blob/main/imgs/image%202%20%282%29.PNG?raw=true"
  ],
  undershadows: [
    "https://github.com/BruhKrypticc/cryptidgames/blob/main/imgs/image.PNG?raw=true",
    "https://github.com/BruhKrypticc/cryptidgames/blob/main/imgs/image%203.PNG?raw=true"
  ]
};

const Modal = ({ visible, game, logo, onClose }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!game) return;
    const interval = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % gameImages[game].length);
    }, 4000);
    return () => clearInterval(interval);
  }, [game]);

  if (!visible) return null;

  return (
    <div id="game-modal" className="visible">
      <div id="close-modal" onClick={onClose}>✖</div>
      <img id="modal-logo" src={logo} alt="Game Logo" />
      <div id="modal-slideshow">
        {gameImages[game].map((url, i) => (
          <div
            key={i}
            className={`modal-bg-image ${i === slideIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Modal;
