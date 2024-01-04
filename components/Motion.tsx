"use client"

import {motion} from 'framer-motion';

// Solo motion.div es client side rendered
export const MotionDiv = motion.div;

// Si lo pongo directo en AnimeCard, falla la app ya que los demas son 
// server side rendered components
