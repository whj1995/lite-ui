import * as React from 'react';
import './style.styl';

interface IProps {
  onChange?: (checked: boolean, e: React.MouseEvent<HTMLDivElement>) => void;
  checked: boolean;
  checkedText?: string;
  unCheckedText?: string;
}

export function Switch(props: IProps) {
  return (
    <div
      className={`lite-switch ${props.checked ? 'lite-switch-checked' : ''} `}
      onClick={(e) => props.onChange && props.onChange(!props.checked, e)}
    >
      <span className='lite-switch-text'>{props.checked ? props.checkedText : props.unCheckedText }</span>
    </div>
  );
}
