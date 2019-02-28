import * as React from 'react';
import './style.styl';

interface IProps {
  max: number;
  min: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

export function Slider(props: IProps) {
  const beginMove = React.useRef(false);
  const sliderRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const total = props.max - props.min;
  const offset = ((props.value - props.min) / total) * 100 + '%';
  const points: number[] = [];

  if (typeof props.step !== 'undefined') {
    const val = props.step / 2;
    points.push(props.min);
    while (points[points.length - 1] <= props.max - val) {
      points.push(points[points.length - 1] + val);
    }
  }

  const calculateValue = (x: number) => {
    if (!sliderRef.current) {
      return;
    }
    const { width, left } = sliderRef.current.getBoundingClientRect();

    let value = (x - left) / width * total + props.min;
    value > props.max && (value = props.max);
    value < props.min && (value = props.min);

    for (let i = 1; i < points.length; i++) {
      const pre = points[i - 1];
      const next = points[i];
      if (pre <= value && value <= next) {
        value = i % 2 === 0 ? next : pre;
        break;
      }
    }
    if (props.value === value) {
      return;
    }
    return value;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) {
      return;
    }
    sliderRef.current.focus();
    const value = calculateValue(e.clientX);
    typeof value !== 'undefined' && props.onChange(value);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!beginMove.current || !sliderRef.current) {
      return;
    }
    const value = calculateValue(e.clientX);
    typeof value !== 'undefined' && props.onChange(value);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });

  React.useEffect(() => {
    const handleMouseUp = () => beginMove.current = false;
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  });

  return (
    <div ref={sliderRef} tabIndex={1} className='lite-slider' onBlur={() => beginMove.current = false} onMouseDown={handleMouseDown} >
      <div className='lite-slider-rail'></div>
      <div className='lite-slider-track' style={{ width: offset }}>
      </div>
      <div className='lite-slider-handler' style={{ left: offset }} onMouseDown={() => beginMove.current = true}>
      </div>
    </div>
  );
}
