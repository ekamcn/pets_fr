import React, { useState } from 'react';

interface ProductImage {
  url: string;
  altText?: string;
  id?: string | number;
  width?: number;
  height?: number;
}

interface ProductImageSliderProps {
  images: ProductImage[];
}

export function ProductImageSlider({ images }: ProductImageSliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const THUMBS_TO_SHOW = 5;

  if (!images || images.length === 0) return null;

  // Move thumbnail window left/right (does NOT change selected image)
  const goLeft = () => {
    setThumbStart((prev) => Math.max(prev - 1, 0));
  };
  const goRight = () => {
    setThumbStart((prev) =>
      Math.min(prev + 1, images.length - THUMBS_TO_SHOW)
    );
  };

  // When clicking a thumbnail, update selectedIndex
  const handleThumbClick = (idx: number) => {
    setSelectedIndex(idx);
  };

  // Only show a window of thumbnails
  const visibleThumbs = images.slice(thumbStart, thumbStart + THUMBS_TO_SHOW);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Main Image */}
      <div className="w-full flex justify-center mb-4 lg:mb-8">
        <img
          src={images[selectedIndex].url}
          alt={images[selectedIndex].altText || `Product image ${selectedIndex + 1}`}
          className="rounded-lg object-contain max-h-[320px] max-w-[320px] lg:max-h-[500px] lg:max-w-[500px] w-auto mx-auto"
        />
      </div>
      {/* Slider Controls and Thumbnails */}
      <div className="flex items-center space-x-2 lg:space-x-4 pt-2 lg:pt-4">
        <button
          onClick={goLeft}
          className="p-2 rounded-full border hover:bg-gray-100"
          aria-label="Scroll thumbnails left"
          disabled={thumbStart === 0}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex space-x-2 lg:space-x-4 overflow-x-auto">
          {visibleThumbs.map((img, idx) => {
            // The actual index in the images array
            const actualIdx = thumbStart + idx;
            return (
              <button
                key={img.id || actualIdx}
                onClick={() => handleThumbClick(actualIdx)}
                className={`border rounded-md p-1 transition-all ${
                  actualIdx === selectedIndex
                    ? 'border-black'
                    : 'border-transparent'
                }`}
                aria-label={`Show image ${actualIdx + 1}`}
                type="button"
              >
                <img
                  src={img.url}
                  alt={img.altText || `Thumbnail ${actualIdx + 1}`}
                  className="w-20 h-20 lg:w-20 lg:h-20 object-cover rounded"
                />
              </button>
            );
          })}
        </div>
        <button
          onClick={goRight}
          className="p-2 rounded-full border hover:bg-gray-100"
          aria-label="Scroll thumbnails right"
          disabled={thumbStart + THUMBS_TO_SHOW >= images.length}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}