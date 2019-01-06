import * as React from 'react';
import './style.styl';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { style, className, ...other } = props;
  return <input className={`lite-input ${typeof className === 'undefined' ? '' : className}`} type='text' style={{ ...style }} {...other} />;
}
