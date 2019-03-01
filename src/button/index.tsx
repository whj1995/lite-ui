import * as React from 'react';
import './style.styl';

export function Button(props: React.DOMAttributes<HTMLButtonElement>) {
  const { children, onClick, ...attrs } = props;
  return <button className='lite-button' {...attrs} >{children}</button>;
}
