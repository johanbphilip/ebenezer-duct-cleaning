'use client';
import { useEffect, useRef, useState } from 'react';

export const AnimatedImage = ({
  src,
  alt,
  className = '',
  containerClassName = '',
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress based on container position
      const containerTop = rect.top;
      const containerBottom = rect.bottom;

      // We want the animation to complete when the image is fully visible
      // Since the image starts with only 1/3 visible, we need to calculate
      // when it becomes fully visible within the viewport

      let progress = 0;

      if (containerTop <= 0 && containerBottom >= windowHeight) {
        // Container fills the entire viewport - animation should be complete
        progress = 1;
      } else if (containerTop <= windowHeight && containerBottom >= 0) {
        // Container is entering or in viewport
        // Animation should complete when container top reaches the top of viewport
        // and there's enough space for the full image to be visible
        const animationDistance = windowHeight; // Distance over which animation occurs
        const scrolled = windowHeight - containerTop;
        progress = Math.max(0, Math.min(1, scrolled / animationDistance));
      } else if (containerBottom < 0) {
        // Container has passed completely
        progress = 1;
      }

      setScrollProgress(progress);
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener with throttling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate transforms based on scroll progress
  const getTransforms = () => {
    // Initial state: center with only top 1/3 visible, tilted
    // Final state: down and left, flat, fully visible

    // Rotation: from -15 degrees to 0 degrees
    // const rotateZ = -15 * (1 - scrollProgress);

    // Position: from center to down and left
    const translateX = -97 * scrollProgress; // Move left
    const translateY = 200 * scrollProgress; // Move down (positive Y moves down)

    const scale = 1.0 + 0.2 * scrollProgress;

    return {
      transform: `translate(${translateX}%, ${translateY}%) scale(${scale}) rotateZ(${0}deg)`,
      // opacity: opacity,
    };
  };

  return (
    <div
      ref={containerRef}
      className={`relative h-screen w-full overflow-hidden ${containerClassName}`}
    >
      <div className="absolute right-50 left-50 z-10 flex h-screen items-start justify-center">
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={`absolute h-auto w-full max-w-md transition-none will-change-transform ${className}`}
          style={getTransforms()}
        />
      </div>
    </div>
  );
};
