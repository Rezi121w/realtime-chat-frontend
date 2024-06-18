import React, { useState } from 'react';
import styles from './modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (newContent: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
    const [newContent, setNewContent] = useState('');

    const handleSave = () => {
        onSave(newContent);
        setNewContent('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Edit Message</h2>
                <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Enter your new message..."
                    className={styles.textarea}
                />
                <div className={styles.buttonGroup}>
                    <button onClick={handleSave} className={styles.saveButton}>Save</button>
                    <button onClick={onClose} className={styles.cancelButton}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
