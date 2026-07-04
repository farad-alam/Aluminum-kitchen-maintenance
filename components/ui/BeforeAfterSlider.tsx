"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { GripVertical } from 'lucide-react';

type Props = {
  beforeImage: string;
  afterImage: string;
};

export function BeforeAfterSlider({ beforeImage, afterImage }: Props) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full h-full overflow-hidden group">
      
      {/* After Image (Background) */}
      <Image 
        src={afterImage} 
        alt="After" 
        fill 
        className="object-cover pointer-events-none" 
      />

      {/* Before Image (Foreground overlay with clip-path) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image 
          src={beforeImage} 
          alt="Before" 
          fill 
          className="object-cover" 
        />
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-white pointer-events-none"
        style={{ left: `calc(${sliderPosition}%)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-(--color-brand-navy)">
          <GripVertical className="h-5 w-5" />
        </div>
      </div>

      {/* Badges */}
      <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-(--color-brand-gold)/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        After
      </div>

      {/* Invisible Range Input for Interaction */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={(e) => setSliderPosition(Number(e.target.value))} 
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        aria-label="Before and after slider"
      />
    </div>
  );
}
