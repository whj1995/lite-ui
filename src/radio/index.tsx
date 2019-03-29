import * as React from 'react';
import './style.styl';

interface IRadioProps extends React.Props<any> {
  value: any;
  style?: React.CSSProperties;
  className?: string;
}

interface IRadioGroupProps extends React.Props<any> {
  value: any;
  onChange?: (value: any) => void;
  style?: React.CSSProperties;
  className?: string;
}

const context = React.createContext({ value: '', onChange: (_value: any) => {/** */ } });

export function Radio(props: IRadioProps) {
  const { value, onChange } = React.useContext(context);

  return (
    <label
      className={
        `lite-radio-wrapper ${value === props.value ? 'lite-radio-wrapper-checked' : ''}
        ${typeof props.className === 'undefined' ? '' : props.className}`
      }
      style={props.style}
      onClick={() => props.value !== value && onChange(props.value)}
    >
      <span className='lite-radio'>
        <span className='lite-radio-dot' />
      </span>
      {typeof props.children !== 'undefined' && <span className='lite-radio-label'>{props.children}</span>}
    </label>
  );
}

Radio.Group = RadioGroup;

function RadioGroup(props: IRadioGroupProps) {
  return (
    <context.Provider value={{ value: props.value, onChange: props.onChange! }}>
      <div style={props.style} className={`lite-radio-group  ${typeof props.className === 'undefined' ? '' : props.className}`}>
        {props.children}
      </div>
    </context.Provider>
  );
}
