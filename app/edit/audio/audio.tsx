'use client';

import React, { useState, useRef, useCallback } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

const ItemTypes = { SEGMENT: 'segment' };

type SegmentType = {
  id: number;
  label: string;
  muted: boolean;
};

const initialSegments: SegmentType[] = [
  { id: 1, label: 'Intro', muted: false },
  { id: 2, label: 'Verse', muted: false },
  { id: 3, label: 'Chorus', muted: false },
];

const AudioSegment = ({
  id,
  index,
  label,
  muted,
  moveSegment,
  toggleMute,
}: {
  id: number;
  index: number;
  label: string;
  muted: boolean;
  moveSegment: (from: number, to: number) => void;
  toggleMute: (id: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.SEGMENT,
    hover(item: { index: number }, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      moveSegment(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.SEGMENT,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`w-40 h-24 p-2 flex flex-col justify-between items-center border rounded-md shadow-sm cursor-move transition-opacity ${
        isDragging ? 'opacity-40' : 'opacity-100'
      } ${muted ? 'bg-red-200' : 'bg-white'}`}
    >
      <span className="font-semibold">{label}</span>
      <div className="w-full h-6 flex items-end gap-1">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`w-1 rounded-sm ${
              muted ? 'bg-red-400' : 'bg-gray-700'
            }`}
            style={{ height: `${Math.random() * 20 + 10}px` }}
          />
        ))}
      </div>
      <button
        onClick={() => toggleMute(id)}
        className="text-xs mt-1 px-2 py-1 border rounded hover:bg-gray-200"
      >
        {muted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
};

export default function AudioTimelineDemo() {
  const [segments, setSegments] = useState<SegmentType[]>(initialSegments);

  const moveSegment = useCallback((from: number, to: number) => {
    setSegments((prev) =>
      update(prev, {
        $splice: [
          [from, 1],
          [to, 0, prev[from]],
        ],
      })
    );
  }, []);

  const toggleMute = useCallback((id: number) => {
    setSegments((prev) =>
      prev.map((seg) =>
        seg.id === id ? { ...seg, muted: !seg.muted } : seg
      )
    );
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="">
        <h2 className="text-xl font-bold mb-4">🎚️ Audio Timeline Demo</h2>
        <div className="flex gap-4 p-4 bg-white border rounded-md shadow-sm overflow-x-auto">
          {segments.map((seg, i) => (
            <AudioSegment
              key={seg.id}
              id={seg.id}
              index={i}
              label={seg.label}
              muted={seg.muted}
              moveSegment={moveSegment}
              toggleMute={toggleMute}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}
