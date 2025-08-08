import React from 'react';

const Sidebar = ({ openModal }) => {
    return (
        <aside className="sidebar">
            <ul className="sidebar-menu">
                <li><a href="#" id="login-link" onClick={openModal}><i className="fas fa-sign-in-alt icon"></i> Log in</a></li>
                <li><a href="#"><i className="fas fa-bell icon"></i> Layanan</a></li>
                <li><a href="#"><i className="fas fa-users icon"></i> Orang</a></li>
                <li><a href="#"><i className="fas fa-archive icon"></i> Arsip</a></li>
                <li><a href="#"><i className="fas fa-handshake icon"></i> Kerja Sama</a></li>
                <li><a href="#"><i className="fas fa-university icon"></i> UPT</a></li>
                <li><a href="#"><i className="fas fa-phone-alt icon"></i> Hotline PMR</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;