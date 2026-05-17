import React from 'react';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="OtpPopop">
            <div className="layer"></div>
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />
            <div className="popb">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h2 className="font-semibold ">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};