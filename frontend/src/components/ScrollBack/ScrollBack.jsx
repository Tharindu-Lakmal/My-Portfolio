import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import scrollTop from './scrollTop';


export default function ScrollBack () {
    const { pathname } = useLocation();

    scrollTop(200);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}

