import React, { useState, useEffect } from 'react';
import './PageLoader.css'

const languages = ['Hello', 'ආයුබෝවන්', '你好', 'வணக்கம்', 'नमस्ते', 'Bonjour', '안녕하세요', 'مرحبا', 'こんにちは'];

const PageLoader = () => {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {

        let intervalDuration = 150; // Default for non-English languages

        if (currentTextIndex === 0) {
            intervalDuration = 1200; // Longer duration for English "Hello"
        }

        if (currentTextIndex < languages.length - 1) {
            // Cycle through the languages with appropriate timing
            const interval = setInterval(() => {
                setCurrentTextIndex(prev => prev + 1);
        }, intervalDuration); // Use different durations

        return () => clearInterval(interval); // Clean up interval

        } else {
            // After showing all languages, start closing animation
            const timeout = setTimeout(() => {
                setIsClosing(true);
        }, intervalDuration);

        return () => clearTimeout(timeout); // Clean up timeout
        }
    }, [currentTextIndex]);
    
    return (
        <div className="pageLoader">
            <div className={`page-loader ${isClosing ? 'closing' : ''}`}>
                <h1>{languages[currentTextIndex]}</h1>
            </div>
        </div>
    );
  
}

export default PageLoader