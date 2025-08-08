import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div id="loginModal" className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <div className="login-form-container">
                    <h2>Login</h2>
                    <p>Masukkan email dan password Anda untuk masuk ke akun Anda</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="unizar@inc" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;