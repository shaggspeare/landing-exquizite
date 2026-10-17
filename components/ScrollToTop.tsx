import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }
    // A #section link from another page: the browser aims before web fonts
    // settle the layout, so aim again once they have.
    document.fonts.ready.then(() => document.getElementById(hash.slice(1))?.scrollIntoView());
  }, [pathname]);

  return null;
};

export default ScrollToTop;
