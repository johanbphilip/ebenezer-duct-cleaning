'use client';

import Image from 'next/image';

export const CustomImage = ({ src, alt, className, caption, backContent }) => {
  return (
    <div className="w-full max-w-xs">
      {/* Required CSS for the flip effect */}
      <style jsx>{`
        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Card container with perspective */}
      <div className="flip-card perspective-1000 relative h-64 w-full">
        {/* Inner container that rotates */}
        <div className="flip-card-inner relative h-full w-full">
          {/* Front of card (Image) */}
          <div className="flip-card-front absolute h-full w-full">
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={src}
                alt={alt}
                fill
                className={className || ''}
                quality={100}
              />
            </div>
          </div>

          {/* Back of card */}
          <div className="flip-card-back absolute h-full w-full">
            <div className="bg-primary flex h-full flex-col items-center justify-center rounded-lg p-4 text-white">
              {backContent || 'Something on the Back'}
            </div>
          </div>
        </div>
      </div>

      {/* Caption below the card */}
      {caption && (
        <p className="text-dark mt-2 text-center text-lg font-bold">
          {caption}
        </p>
      )}
    </div>
  );
};
