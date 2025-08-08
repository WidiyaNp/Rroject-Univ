import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <a href="#" className="header-logo-container">
              /*<img src={logo} alt="Logo Beranda" className="BackgroundUniv.jpeg" />*/
            </a>
            <nav>
                <ul className="nav-menu">
                    <li><a href="#">Beranda</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Fakultas</a></li>
                    <li><a href="#">Direktori</a></li>
                    <li><a href="#">Pendidikan</a></li>
                    <li><a href="#">Penelitian</a></li>
                    <li><a href="#">Pengabdian</a></li>
                </ul>
            </nav>
            <div>
                <a href="#"><i className="fas fa-search"></i></a>
            </div>
        </header>
    );
};

export default Header;