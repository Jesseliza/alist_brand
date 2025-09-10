"use client";

import { useState, useRef, MouseEvent, TouchEvent, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface SlideCaptchaProps {
  onSuccess: () => void;
}

const PUZZLE_WIDTH = 50;
const PUZZLE_HEIGHT = 50;
const TOLERANCE = 5;

export default function SlideCaptcha({ onSuccess }: SlideCaptchaProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [puzzlePosition, setPuzzlePosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [imageUrl, setImageUrl] = useState('');

  const sliderRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const generatePuzzle = useCallback(() => {
    const random = Date.now();
    setImageUrl(`https://picsum.photos/300/150?random=${random}`);

    const imageWidth = 300;
    const imageHeight = 150;
    const targetX = Math.floor(Math.random() * (imageWidth - PUZZLE_WIDTH - 100)) + 100; // Avoid edges
    const targetY = Math.floor(Math.random() * (imageHeight - PUZZLE_HEIGHT));

    setTargetPosition({ x: targetX, y: targetY });
    setPuzzlePosition({ x: 0, y: targetY });
    setSliderValue(0);
  }, []);

  useEffect(() => {
    generatePuzzle();
  }, [generatePuzzle]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    if (isDragging) {
      const isCorrect =
        Math.abs(puzzlePosition.x - targetPosition.x) < TOLERANCE;

      if (isCorrect) {
        onSuccess();
      } else {
        generatePuzzle();
      }
      setIsDragging(false);
    }
  };

  const handleDrag = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current || !handleRef.current) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const handleRect = handleRef.current.getBoundingClientRect();

    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    let newSliderValue = ((clientX - sliderRect.left) / (sliderRect.width - handleRect.width)) * 100;
    newSliderValue = Math.max(0, Math.min(100, newSliderValue));
    setSliderValue(newSliderValue);

    const imageWidth = 300;
    const newPuzzleX = (newSliderValue / 100) * (imageWidth - PUZZLE_WIDTH);
    setPuzzlePosition({ x: newPuzzleX, y: targetPosition.y });
  };

  return (
    <div className="flex flex-col items-center gap-4">
        {imageUrl && (
            <div ref={imageRef} className="relative w-[300px] h-[150px]">
                <Image src={imageUrl} alt="Captcha" width={300} height={150} key={imageUrl} />
                <div
                    className="absolute border-2 border-dashed border-gray-500"
                    style={{
                        width: `${PUZZLE_WIDTH}px`,
                        height: `${PUZZLE_HEIGHT}px`,
                        top: `${targetPosition.y}px`,
                        left: `${targetPosition.x}px`,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    }}
                />
                {/* Puzzle Piece */}
                <div
                    className="absolute"
                    style={{
                        width: `${PUZZLE_WIDTH}px`,
                        height: `${PUZZLE_HEIGHT}px`,
                        top: `${puzzlePosition.y}px`,
                        left: `${puzzlePosition.x}px`,
                        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        src={imageUrl}
                        alt="Puzzle Piece"
                        width={300}
                        height={150}
                        style={{
                            position: 'absolute',
                            top: `-${targetPosition.y}px`,
                            left: `-${targetPosition.x}px`,
                            pointerEvents: 'none',
                            maxWidth: 'none',
                        }}
                    />
                </div>
            </div>
        )}

      <div
        className="w-full bg-gray-200 rounded-full h-12 flex items-center relative select-none mt-2"
        ref={sliderRef}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchMove={handleDrag}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="h-12 w-12 bg-[#00A4B6] rounded-full absolute cursor-pointer"
          style={{ left: `calc(${sliderValue}% - ${sliderValue * 0.48}px)` }}
          ref={handleRef}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          <div className="flex items-center justify-center h-full text-white text-2xl">
            &rarr;
          </div>
        </div>
        <div className="text-center w-full text-gray-500">
          Slide to solve
        </div>
      </div>
    </div>
  );
}
