import * as React from 'react';
import './style.styl';

interface IProps {
  onChange?: (checked: boolean, e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
  className?: string;
  checked: boolean;
  checkedText?: string;
  unCheckedText?: string;
}

export function Switch(props: IProps) {
  return (
    <div
      style={props.style}
      className={`lite-switch ${props.checked ? 'lite-switch-checked' : ''} ${typeof props.className === 'undefined' ? '' : props.className} `}
      onClick={(e) => props.onChange && props.onChange(!props.checked, e)}
    >
      <span className='lite-switch-text'>{props.checked ? props.checkedText : props.unCheckedText}</span>
    </div>
  );
}
