'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration,
  className = '',
  threshold = 0.12,
  as: Component = 'div',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if IntersectionObserver is available
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      observer.observe(element);
      return () => observer.disconnect();
    } else {
      setIsVisible(true);
    }
  }, [threshold]);

  const animationClass = {
    'fade-up': 'reveal-fade-up',
    'fade-down': 'reveal-fade-down',
    'fade-left': 'reveal-fade-left',
    'fade-right': 'reveal-fade-right',
    'zoom-in': 'reveal-zoom-in',
  }[animation];

  const inlineStyles: React.CSSProperties = {
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
    ...(duration ? { transitionDuration: `${duration}ms` } : {}),
  };

  return (
    <Component
      ref={elementRef}
      style={inlineStyles}
      className={`reveal-init ${animationClass} ${
        isVisible ? 'reveal-visible' : ''
      } ${className}`}
    >
      {children}
    </Component>
  );
}
