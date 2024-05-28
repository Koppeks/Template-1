import { useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from "flubber";

import PropTypes from 'prop-types';
SVGMorph.propTypes = {
  paths: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  opacity: PropTypes.number
};

function SVGMorph({paths, opacity}) {
  const onceEffect = useRef(false)
  const [indexOfPath, setIndexOfPath] = useState(0)
  const progress = useMotionValue(0)
  const pathIndex = paths.length > 0 ? paths.map((_, i) => i) : []
  const pathValue = useTransform(progress, pathIndex, paths, {
    mixer: (a, b) => interpolate(a,b)
  })

  useEffect(()=>{
    if(onceEffect.current){
      animate(progress, indexOfPath, {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.4,
        onComplete: ()=>{
          if(indexOfPath === paths.length - 1){
            setIndexOfPath(0)
            progress.set(0)
          }else{
            setIndexOfPath(indexOfPath + 1)
          }
        }
      })
    }
    return () => onceEffect.current = true
  },[indexOfPath, pathValue, paths.length, progress])

  return(
    <motion.path d={pathValue} opacity={opacity} />
  )
}

export default SVGMorph