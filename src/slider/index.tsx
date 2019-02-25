import * as React from 'react';
import './style.styl';

interface IProps {
  max: number;
  min: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

export function Slider(props: IProps) {
  return (
    <div className='lite-slider'>
      <div className='lite-slider-rail'></div>
      <div className='lite-slider-track'></div>
      <div className='lite-slider-handler'></div>
    </div>
  );
}
