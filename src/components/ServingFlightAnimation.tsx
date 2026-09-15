import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FoodIllustration } from './FoodIllustration';

export interface ActiveFlight {
  id: string;
  visualType: string;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
}

interface ServingFlightAnimationProps {
  flights: ActiveFlight[];
  onFlightComplete: (flightId: string) => void;
}

export const ServingFlightAnimation: React.FC<ServingFlightAnimationProps> = ({
  flights,
  onFlightComplete
}) => {
  const completedRef = useRef<Set<string>>(new Set());

  const handleComplete = (id: string) => {
    if (completedRef.current.has(id)) return;
    completedRef.current.add(id);
    onFlightComplete(id);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {flights.map((flight) => {
          // Arc calculation: apex is higher than both start and target
          const midX = (flight.startX + flight.targetX) / 2;
          const apexY = Math.min(flight.startY, flight.targetY) - 90;

          return (
            <motion.div
              key={flight.id}
              initial={{
                x: flight.startX - 32,
                y: flight.startY - 32,
                scale: 0.6,
                opacity: 0.9,
                rotate: -12
              }}
              animate={{
                x: [flight.startX - 32, midX - 32, flight.targetX - 32],
                y: [flight.startY - 32, apexY, flight.targetY - 32],
                scale: [0.6, 1.2, 0.95],
                rotate: [-12, 10, 0],
                opacity: [0.9, 1, 1]
              }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1], // Natural arc easing
                times: [0, 0.45, 1]
              }}
              onAnimationComplete={(definition) => {
                // Only trigger completion on the forward animate sequence, never on exit
                if (typeof definition === 'object') {
                  handleComplete(flight.id);
                } else if (!definition || definition === 'animate') {
                  handleComplete(flight.id);
                }
              }}
              className="absolute w-16 h-16 filter drop-shadow-2xl"
            >
              <div className="w-full h-full bg-[#FDF8ED] rounded-full p-1.5 border-2 border-[#E8A93A] shadow-xl flex items-center justify-center">
                <FoodIllustration type={flight.visualType} size="sm" />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
