'use client';

import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

export default function VideoEditorWithOverlay({

  imageDataURL,
  textValue,
}: {
  imageDataURL: string | null;
  textValue: string;
}) {
  const [textPosition, setTextPosition] = useState({ x: 100, y: 100 });
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 });

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      

      {/* Image Overlay */}
      {imageDataURL && (
        <Rnd
          size={{ width: 150, height: 100 }}
          position={imagePosition}
          onDragStop={(e, d) => setImagePosition({ x: d.x, y: d.y })}
          onResizeStop={(e, direction, ref, delta, position) => {
            setImagePosition(position);
          }}
          bounds="parent"
        >
          <img
            src={imageDataURL}
            alt="Overlay"
            className="w-full h-full object-contain border border-blue-500"
          />
        </Rnd>
      )}

      {/* Text Overlay */}
      {textValue && (
        <Rnd
          default={{
            x: textPosition.x,
            y: textPosition.y,
            width: 200,
            height: 50,
          }}
          bounds="parent"
          onDragStop={(e, d) => setTextPosition({ x: d.x, y: d.y })}
          disableResizing
        >
          <div className="text-white text-lg   px-2 py-1 rounded cursor-move">
            {textValue}
          </div>
        </Rnd>
      )}
    </div>
  );
}
