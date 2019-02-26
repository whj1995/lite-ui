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

  const calculateValue = (x: number) => {
    if (!sliderRef.current) {
      return;
    }
    const { width, left } = sliderRef.current.getBoundingClientRect();

    let value = (x - left) / width * total + props.min;
    value > props.max && (value = props.max);
    value < props.min && (value = props.min);

    if (typeof props.step !== 'undefined' && Math.abs(value - props.value) < props.step) {
      return;
    }

    return value;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) {
      return;
    }

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
    <div ref={sliderRef} className='lite-slider' onMouseDown={handleMouseDown} >
      <div className='lite-slider-rail'></div>
      <div className='lite-slider-track' style={{ width: offset }}>
      </div>
      <div className='lite-slider-handler' style={{ left: offset }} onMouseDown={() => beginMove.current = true}>
      </div>
    </div>
  );
}
