import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface OdometerProps {
  value: number;
  prefix?: string;
  className?: string;
}

export const Odometer: React.FC<OdometerProps> = ({ 
  value, 
  prefix = '₹', 
  className = '' 
}) => {
  const [prevValue, setPrevValue] = useState(value);
  const isIncreasing = value >= prevValue;

  useEffect(() => {
    setPrevValue(value);
  }, [value]);

  const digits = value.toString().split('');

  return (
    <span className={`inline-flex items-center font-mono-chit font-bold tracking-tight ${className}`}>
      <span className="mr-0.5">{prefix}</span>
      <span className="inline-flex overflow-hidden h-[1.25em] leading-[1.25em]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: isIncreasing ? 18 : -18, opacity: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: isIncreasing ? -18 : 18, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 450,
              damping: 30,
              mass: 0.8
            }}
            className="inline-block"
          >
            {value.toLocaleString('en-IN')}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
};
