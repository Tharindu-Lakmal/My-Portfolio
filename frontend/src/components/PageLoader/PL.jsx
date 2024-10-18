import React, { useState, useEffect } from 'react';

const PL = ({ pageName }) => {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [currentText, setCurrentText] = useState('');
    
    const helloLanguages = ['Hello', 'ආයුබෝවන්', 'வணக்கம்', 'नमस्ते', '你好'];
  
    useEffect(() => {
      if (isFirstLoad) {
        // Display "Hello" in different languages only on first load
        let index = 0;
        const interval = setInterval(() => {
          setCurrentText(helloLanguages[index]);
          index++;
          if (index === helloLanguages.length) {
            clearInterval(interval);
            setTimeout(() => {
              setIsFirstLoad(false);
            }, 1000); // Short delay before the loader closes
          }
        }, 1000); // Time delay between language changes
      } else {
        // Display the current page name on navigation
        setCurrentText(pageName);
      }
    }, [isFirstLoad, pageName]);
  
    return (
      <div className={`pageLoader ${isFirstLoad ? '' : 'close-loader'}`}>
        <div className="loader-content">
          <h1>{currentText}</h1>
        </div>
      </div>
    );
  };

export default PL