import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LoginModal from './components/LoginModal';
import './App.css';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Sidebar openModal={openModal} />
            <div className="main-container">
                <Header />
                <main className="content"></main>
            </div>
            <LoginModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default App;