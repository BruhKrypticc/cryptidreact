import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loading-screen" className={fade ? 'fade-out' : ''}>
      <video id="loading-video" autoPlay muted loop playsInline>
        <source src="https://github.com/BruhKrypticc/cryptidgames/raw/refs/heads/main/Overlay%20Super%20Black%20Background%20With%20Scratch%20And%20Dust%20Screen%20%20For%2016%2035mm.mp4" type="video/mp4" />
      </video>
      <img id="loading-logo" src="https://github.com/BruhKrypticc/cryptidgames/blob/main/imgs/Untitled333_20250725100632.PNG?raw=true" alt="Logo" />
    </div>
  );
};

export default LoadingScreen;
