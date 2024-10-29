import { useEffect } from 'react';

export default function scrollTop(delay) {
  
    useEffect(() => {
        const handleBeforeUnload = () => {
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, delay);
        };
    
        window.addEventListener('load', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('load', handleBeforeUnload);
        };
      }, [delay]);

}

