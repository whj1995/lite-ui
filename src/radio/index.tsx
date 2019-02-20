import * as React from 'react';
import './style.styl';

interface IProps extends React.Props<any> {
  //
}

export function Radio(props: IProps) {
  return (
    <label className='lite-radio'>
      <span className='lite-radio-ipt-wrapper'>
        <span className='lite-radio-checked' />
      </span>
      {typeof props.children !== 'undefined' && <span className='lite-radio-label'>{props.children}</span>}
    </label>
  );
}
