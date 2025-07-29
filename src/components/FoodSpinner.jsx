<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
=======

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
>>>>>>> ad213f2d3e87c4ed11deebb6bcaa90e3ea7da708
import { motion } from "framer-motion";

const foodOptions = [
  "🍕 Pizza",
  "🍣 Sushi",
  "🍔 Burgers",
  "🥗 Salad",
  "🌮 Tacos",
  "🍝 Pasta",
  "🍜 Ramen",
  "🍛 Curry",
];

const segmentAngle = 360 / foodOptions.length;

export default function FoodSpinner() {
  const [spinning, setSpinning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const wheelRef = useRef(null);

  const spinWheel = () => {
    setSpinning(true);
    const index = Math.floor(Math.random() * foodOptions.length);
    setSelectedIndex(index);
    const spins = 5;
    const angle = 360 * spins + index * segmentAngle + segmentAngle / 2;
    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 3s cubic-bezier(0.33, 1, 0.68, 1)";
      wheelRef.current.style.transform = `rotate(-${angle}deg)`;
    }
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').catch(console.error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <h1 className="text-2xl font-bold mb-4">What should I eat?</h1>
      <div className="relative w-64 h-64 mb-4">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-[20px] border-l-transparent border-r-transparent border-b-red-500 z-10" />
        <div
          ref={wheelRef}
          className="w-full h-full rounded-full border-4 border-black relative"
        >
          {foodOptions.map((food, i) => {
            const rotation = i * segmentAngle;
            return (
              <div
                key={food}
                className="absolute left-1/2 top-1/2 w-1/2 h-[1px] origin-left"
                style={{
                  transform: `rotate(${rotation}deg) translateX(-50%)`,
                  transformOrigin: "0% 0%",
                }}
              >
                <span
                  className="block text-xs transform"
                  style={{ transform: `rotate(${90 - rotation}deg) translateY(-0.75rem)` }}
                >
                  {food}
                </span>
              </div>
            );
          })}
        </div>
      </div>
<<<<<<< HEAD
      <button
        onClick={spinWheel}
        disabled={spinning}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 disabled:opacity-50"
      >
        {spinning ? "Spinning..." : "SPIN"}
      </button>
=======
      <Button onClick={spinWheel} disabled={spinning}>
        {spinning ? "Spinning..." : "SPIN"}
      </Button>
>>>>>>> ad213f2d3e87c4ed11deebb6bcaa90e3ea7da708
      {selectedIndex !== null && !spinning && (
        <div className="mt-4 text-lg font-semibold">
          You should eat: {foodOptions[selectedIndex]}
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> ad213f2d3e87c4ed11deebb6bcaa90e3ea7da708
