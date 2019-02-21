import * as React from 'react';
import './style.styl';

interface IProps extends React.Props<any> {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

export function Checkbox(props: IProps) {
  return (
    <label
      className={`lite-checkbox ${props.checked ? 'lite-checkbox-checked' : ''}`}
      onClick={() => props.onChange && props.onChange(!props.checked)}
    >
      <span className='lite-checkbox-box'></span>
      {typeof props.children !== 'undefined' && <span className='lite-checkbox-label'>{props.children}</span>}
    </label>
  );
}
