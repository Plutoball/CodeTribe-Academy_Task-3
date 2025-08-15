//Authentication will be wrapped in a modal...//

import AuthTabs from './authentication'; //the componet being wrapped to save pages
import './authModal.css'; // CSS for the backdrop and modal

type AuthModalProps = {
    mode: 'signin' | 'sign-up';
    onClose: () => void;
};

function AuthModal ({ mode, onClose }: AuthModalProps) {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='modal-close' onClick={onClose}>&times;</button>
                <AuthTabs initialTab= {mode} />
            </div>
        </div>
    );
}

export default AuthModal;