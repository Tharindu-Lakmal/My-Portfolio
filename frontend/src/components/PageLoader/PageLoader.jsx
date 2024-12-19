import React, { useState, useEffect } from 'react';
import './PageLoader.css'
import { useLocation } from 'react-router-dom';

const languages = ['Hello', 'ආයුබෝවන්', 'வணக்கம்', '你好', 'नमस्ते', 'Bonjour', '안녕하세요', 'مرحبا', 'こんにちは'];

const PageLoader = ({ pageName }) => {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isClosing, setIsClosing] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const currentLocation = useLocation();

    useEffect(() => {

        // Check if the loader has already been loaded
        const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');
        
        if (hasLoadedBefore && currentLocation.pathname !== '/') {

            // If not the first load, show only the page name
            setIsFirstLoad(false);
            setCurrentTextIndex(-1); // No languages, skip to pageName loader

            const timeout = setTimeout(() => 
                setIsClosing(true)
            , 1200); // Close loader with page name

            return () => clearTimeout(timeout);

        }
        
        else {
            // If first time loading, display welcome languages
            if (!hasLoadedBefore && currentLocation.pathname == '/') {
                sessionStorage.setItem('hasLoadedBefore', 'true'); // Mark first-time load in sessionStorage
            }

            let intervalDuration = 190;

            if (currentTextIndex === 0) {
                intervalDuration = 1200; // Longer duration for English "Hello"
            }

            if (currentTextIndex < languages.length - 1) {
                // Cycle through the languages
                const interval = setInterval(() => {
                    setCurrentTextIndex(prev => prev + 1);
                }, intervalDuration);

                return () => clearInterval(interval); // Clear the interval

            } else {
                // After showing all languages, start closing animation
                const timeout = setTimeout(() => {
                    setIsClosing(true);
                }, intervalDuration);

                return () => clearTimeout(timeout); // Clean up timeout
            }
        }
    }, [currentTextIndex, pageName]);
    
    return (
        <div className="pageLoader">
            <div className={`page-loader ${isClosing ? 'closing' : ''}`}>
                {isFirstLoad && currentTextIndex >= 0 ? (
                    <h1>{languages[currentTextIndex]}</h1>
                ) : (
                    <h1>{pageName}</h1>
                )}
            </div>
        </div>
    );
  
}

export default PageLoader