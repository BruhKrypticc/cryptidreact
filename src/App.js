import React, { useState, useRef } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Soundtrack from './components/Soundtrack';
import Modal from './components/Modal';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalGame, setModalGame] = useState(null);
  const [modalLogo, setModalLogo] = useState('');

  const projectsRef = useRef();

  const handleArrowClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCardClick = (game, logo) => {
    setModalGame(game);
    setModalLogo(logo);
    setModalVisible(true);
  };

  const handleCloseModal = () => setModalVisible(false);

  return (
    <div className="App">
      <LoadingScreen />
      <Hero onArrowClick={handleArrowClick} />
      <div ref={projectsRef}>
        <Projects onCardClick={handleCardClick} />
      </div>
      <Soundtrack />
      <Modal visible={modalVisible} game={modalGame} logo={modalLogo} onClose={handleCloseModal} />
      <Footer />
    </div>
  );
}

export default App;
