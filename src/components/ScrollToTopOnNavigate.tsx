'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll window smoothly or instantly to top on page change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}
