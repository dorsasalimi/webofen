'use client';

import { motion } from 'framer-motion';
import React from 'react';


// Reusable animated component that can be used to wrap any section
const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0.2, 
  duration = 0.5, 
  animation = "fadeIn", // Options: fadeIn, slideUp, slideIn, scale, stagger
  staggerChildren = 0.1, // Used for stagger animation
  direction = "up", // Used for slide animations: up, down, left, right
  once = true, // Whether to animate only once or every time in view
  amount = 0.3 // Amount of element that needs to be in view to trigger animation
}) => {
  
  // Animation variants
  const variants = {
    // Fade in animation
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration: duration,
          delay: delay
        }
      }
    },
    
    // Slide up animation
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: duration,
          delay: delay
        }
      }
    },
    
    // Slide in animation (direction based)
    slideIn: {
      hidden: { 
        opacity: 0, 
        x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
        y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0
      },
      visible: { 
        opacity: 1, 
        x: 0,
        y: 0,
        transition: { 
          duration: duration,
          delay: delay
        }
      }
    },
    
    // Scale animation
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: duration,
          delay: delay
        }
      }
    },
    
    // Stagger animation for children
    stagger: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          staggerChildren: staggerChildren,
          delayChildren: delay
        }
      }
    },
    
    // For stagger children
    staggerItem: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: duration }
      }
    }
  };
  
  // Select the appropriate variant based on animation type
  const selectedVariant = variants[animation];
  
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: amount }}
      variants={selectedVariant}
    >
      {animation === "stagger" 
        ? React.Children.map(children, child => (
            <motion.div variants={variants.staggerItem}>
              {child}
            </motion.div>
          ))
        : children
      }
    </motion.div>
  );
};

export default AnimatedSection;