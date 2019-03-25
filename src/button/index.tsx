import * as React from 'react';
import './style.styl';

export function Button(props: React.DOMAttributes<HTMLButtonElement> & { className: string }) {
  const { children, className, ...attrs } = props;
  return <button className={`lite-button ${typeof className === 'undefined' ? '' : className}`} {...attrs} >{children}</button>;
}
