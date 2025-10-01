import React from 'react';
import './Soundtrack.css';

const Soundtrack = () => {
  return (
    <section id="soundtrack">
      <div className="soundtrack-container">
        <iframe
          className="soundtrack-embed"
          src="https://open.spotify.com/embed/album/5bGQyQwWGTRyOA3WuUfcZn?utm_source=generator&theme=0"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <div className="soundtrack-text">
          <div className="under-shadows">UNDER SHADOWS</div>
          <div className="soundtrack-title">SOUNDTRACK</div>
        </div>
      </div>
    </section>
  );
};

export default Soundtrack;
