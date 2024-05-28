import { useEffect, useState } from "react";
import { motion, animate, useMotionValue, useTransform} from "framer-motion";
import {interpolate} from "flubber"

import PropTypes from "prop-types";
WaveCircles.propTypes = {
  circles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

function WaveCircles({ circles }) {

  const [indexOfCircles, setIndexOfCircles] = useState(0);
  const progress = useMotionValue(0);
  const getIndex = circles.length > 0 ? circles.map((_, i) => i) : [];
  const circlesValues = useTransform(progress, getIndex, circles,  
      (a, b) => ({
      cx: interpolate(a.cx, b.cx, progress),
      cy: interpolate(a.cy, b.cy, progress),
      r: interpolate(a.r, b.r, progress),
      opacity: interpolate(a.opacity, b.opacity, progress),
    })
  );

  useEffect(() => {
      animate(progress, indexOfCircles, {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.4,
        onComplete: () => {
          if (indexOfCircles === circles.length - 1) {
            setIndexOfCircles(0);
            progress.set(0);
          } else {
            setIndexOfCircles(indexOfCircles + 1);
          }
        },
      });
    }, [circles.length, indexOfCircles, progress]);


  return (
    <motion.circle
      cx={circlesValues.current.cx}
      cy={circlesValues.current.cy}
      r={circlesValues.current.r}
      opacity={circlesValues.current.opacity}
      stroke="#6b97ff"
      strokeWidth={16}
    />
  );
}

export default WaveCircles;