import React, { useState } from 'react';
import Cell from './Cell';

/* Need to map over the COLORS array, so we pull them from ../utils */
import { COLORS } from '../utils';

/**
 * The Palette component represents the interface for displaying
 * clickable color cells, and needs to communicate the activeColor
 * to other components. 
 */
const Palette = (props) => {
  /**
   * Create constants for activeColor and setActiveColor, reading the value off of the props
   */
  const {activeColorParents, setActiveColorParents} = props;

  /**
   * For the template, you need to:
   * - map over COLORS 
   * - return from the mapping function a <Cell /> which:
   *    - has a unique key (you can use 'palette-' and the index of the color)
   *    - has a prop of color equal to the color from the map
   *    - has a prop of isActive equal to true if activeColor equals the color from the map
   *    - has a prop of handleClick which is a function that calls setActiveColor, passing it 
   *      the color from the map
   */
 

  return <div className="palette">
    {COLORS.map((color, idx) => {
      return <Cell 
        isActive={activeColorParents === color ? true : false} 
        color={color} 
        handleClick={() => setActiveColorParents(color)} 
        key={'palette-' + idx } /> 
    })}
  </div>
}

export default Palette;