import * as React from 'react';
import './style.styl';

export const Input = React.forwardRef((props: React.InputHTMLAttributes<HTMLInputElement>, ref: React.Ref<HTMLInputElement>) => {
  const { style, className, ...other } = props;
  return <input ref={ref} className={`lite-input ${typeof className === 'undefined' ? '' : className}`} type='text' style={{ ...style }} {...other} />;
});
