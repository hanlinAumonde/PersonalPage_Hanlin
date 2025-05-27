import { useEffect, useState } from 'react';

interface UseMultipleIntersectionAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  targetSelector: string;
}

/**
 * custom hook for handling multiple internal elements' intersection animations
 * @param options 
 * @param options.threshold 
 * @param options.rootMargin 
 * @param options.targetSelector 
 * @returns visibleItems
 */
const useMultipleIntersectionAnimation = (options: UseMultipleIntersectionAnimationOptions) => {
  const [visibleItems, setVisibleItems] = useState<{[key: number]: boolean}>({});
  
  useEffect(() => {    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleItems(prev => ({...prev, [index]: entry.isIntersecting}));
        });
      },
      { 
        threshold: options.threshold || 0.2,
        rootMargin: options.rootMargin || '0px'
      }
    );
    
    const elements = document.querySelectorAll(options.targetSelector);
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [options.threshold, options.rootMargin, options.targetSelector]);
  
  return visibleItems;
};

export default useMultipleIntersectionAnimation; 