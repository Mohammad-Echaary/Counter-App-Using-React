import { useState, useEffect } from "react";
import "./App.css";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const safeCount = Math.max(0, count);
  const value = safeCount < 10 ? `0${safeCount}` : safeCount;
  const [isAuto, setIsAuto] = useState(null);

  useEffect(() => {
    if (!isAuto) return;

    const interval = setInterval(() => {
      setCount((c) => (isAuto === "inc" ? c + 1 : c - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isAuto]);

  function increment() {
    return setCount((count) => count + 1);
  }
  function decrement() {
    return setCount((count) => count - 1);
  }

  function reset() {
    setIsAuto(null);
    setCount(0);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-[750px] border border-gray-200">
        <h1 className="text-5xl font-bold tracking-wide mb-10 text-gray-800 text-center">
          Counter App
        </h1>

        <div className="container flex gap-6 items-stretch">
          <div
            className="flex-1 bg-gradient-to-b from-gray-800 to-gray-950
  text-white text-[140px] font-mono rounded-3xl flex items-center justify-center
  shadow-lg shadow-black/60 border-4 border-gray-700
  ring-4 ring-gray-500/20 ring-offset-2"
          >
            {value}
          </div>

          <div className="flex flex-col gap-4 w-64">
            <button
              className="cursor-pointer text-xl py-3 rounded-xl transition-all duration-200 active:scale-95 bg-emerald-500 hover:bg-emerald-600 text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              onClick={increment}
            >
              Increment
            </button>

            <button
              className="cursor-pointer text-xl py-3 rounded-xl transition-all duration-200 active:scale-95 bg-rose-500 hover:bg-rose-600 text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              onClick={decrement}
            >
              Decrement
            </button>

            <button
              className="cursor-pointer text-xl py-3 rounded-xl transition-all duration-200 active:scale-95 bg-emerald-400 hover:bg-emerald-500 text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              onClick={() => setIsAuto("inc")}
            >
              Auto Increment
            </button>

            <button
              className="cursor-pointer text-xl py-3 rounded-xl transition-all duration-200 active:scale-95 bg-rose-400 hover:bg-rose-500 text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              onClick={() => setIsAuto("dec")}
            >
              Auto Decrement
            </button>

            <button
              className="cursor-pointer text-xl py-3 rounded-xl transition-all duration-200 active:scale-95 bg-yellow-400 hover:bg-yellow-500 text-black font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              onClick={() => setIsAuto(null)}
            >
              Stop
            </button>
            <button
              className="cursor-pointer text-xl py-3 rounded-xl transition-all duration-200 active:scale-95 bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
