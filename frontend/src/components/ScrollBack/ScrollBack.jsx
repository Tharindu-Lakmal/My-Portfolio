import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollTop from './ScrollTop';

const ScrollBack = () => {
    const { pathname } = useLocation();

    ScrollTop(200);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}

export default ScrollBack