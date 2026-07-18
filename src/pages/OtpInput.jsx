import React, { useRef, useState } from 'react';

export const OtpInput = ({ length = 6, onComplete }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        const cleanedValue = value.trim();

        // If input contains multiple digits (e.g. SMS autofill or mobile paste)
        if (cleanedValue.length > 1) {
            const digitsOnly = cleanedValue.replace(/\D/g, '').slice(0, length);
            if (!digitsOnly) return;

            const newOtp = new Array(length).fill('');
            digitsOnly.split('').forEach((val, idx) => {
                newOtp[idx] = val;
            });
            setOtp(newOtp);

            const focusIndex = Math.min(digitsOnly.length - 1, length - 1);
            inputRefs.current[focusIndex]?.focus();

            const otpValue = newOtp.join('');
            if (otpValue.length === length) {
                onComplete(otpValue);
            }
            return;
        }

        if (cleanedValue !== '' && isNaN(Number(cleanedValue))) return;

        const newOtp = [...otp];
        newOtp[index] = cleanedValue;
        setOtp(newOtp);

        // Move to next input if value is entered
        if (cleanedValue !== '' && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        // Check if OTP is complete
        const otpValue = newOtp.join('');
        if (otpValue.length === length) {
            onComplete(otpValue);
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            if (otp[index] === '' && index > 0) {
                // Move to previous input on backspace if current is empty
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
        if (!pastedData) return;

        const newOtp = new Array(length).fill('');
        pastedData.split('').forEach((value, index) => {
            newOtp[index] = value;
        });
        setOtp(newOtp);

        // Focus last filled input
        const focusIndex = Math.min(pastedData.length - 1, length - 1);
        inputRefs.current[focusIndex]?.focus();

        const otpValue = newOtp.join('');
        if (otpValue.length === length) {
            onComplete(otpValue);
        }
    };

    return (
        <div className="flex gap-2 justify-center">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-12 h-14 text-2xl text-center border-2 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    autoComplete="off"
                />
            ))}
        </div>
    );
};