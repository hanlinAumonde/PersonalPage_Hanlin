import { useEffect, useRef, useState } from 'react';

interface UseIntersectionAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  header: boolean;
}

/**
 * customized hook for handling intersection animations
 * @param options 
 * @param options.threshold 
 * @param options.rootMargin
 * @returns [ref, isVisible]
 */
const useIntersectionAnimation = <T extends HTMLElement>(options: UseIntersectionAnimationOptions = { header: false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (options.header) {
        setIsVisible(true);
      }
    }, 300);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    );
    
    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      clearTimeout(timer);
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.rootMargin]);
  
  return [elementRef, isVisible] as const;
};

export default useIntersectionAnimation; 