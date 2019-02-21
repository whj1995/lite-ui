import * as React from 'react';
import './style.styl';

interface IRadioProps extends React.Props<any> {
  value: any;
}

interface IRadioGroupProps extends React.Props<any> {
  value: any;
  onChange: (value: any) => void;
}

const context = React.createContext({ value: '', onChange: (_value: any) => {/** */ } });

export function Radio(props: IRadioProps) {
  const { value, onChange } = React.useContext(context);

  return (
    <label
      className={`lite-radio-wrapper ${value === props.value ? 'lite-radio-wrapper-checked' : ''}`}
      onClick={() => onChange(props.value)}
    >
      <span className='lite-radio'>
        <span className='lite-radio-dot' />
      </span>
      {typeof props.children !== 'undefined' && <span className='lite-radio-label'>{props.children}</span>}
    </label>
  );
}

Radio.Group = Group;

function Group(props: IRadioGroupProps) {
  return (
    <context.Provider value={{ value: props.value, onChange: props.onChange }}>
      <div className='lite-radio-group'>
        {props.children}
      </div>
    </context.Provider>
  );
}
