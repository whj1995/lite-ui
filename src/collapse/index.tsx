import * as React from 'react';
import './style.styl';

interface IProps extends React.Props<any> {
  title?: string;
  defaultCollapse?: boolean;
  iconPosition?: 'left' | 'right';
}

export function Collapse(props: IProps) {
  const [collapse, setCollapse] = React.useState(typeof props.defaultCollapse === 'undefined' ? false : props.defaultCollapse);
  return (
    <div className='lite-collapse'>
      <div className='lite-collapse-head' style={{ padding: `0 ${props.iconPosition === 'left' ? '28px' : '20px'}` }}>
        <span className='lite-collapse-title'>{props.title}</span>
        {
          collapse ? <Close style={{ [props.iconPosition!]: '3px' }} onClick={() => setCollapse(false)} /> : <Open style={{ [props.iconPosition!]: '3px' }} onClick={() => setCollapse(true)} />
        }
      </div>
      <div className={`lite-collapse-content ${collapse ? 'lite-collapse-hidden' : ''}`}>
        {props.children}
      </div>
    </div>
  );
}

Collapse.defaultProps = {
  iconPosition: 'right'
};

function Open(props: { onClick: () => void, style: React.CSSProperties }) {
  return (
    <svg onClick={props.onClick} style={props.style} className='lite-icon' viewBox='0 0 1024 1024' width='22' height='22'>
      <path fill='rgba(255,255,255,0.7)' d='M862.01078557 522.19448889a48.54518557 48.54518557 0 0 0 14.07810332-34.4670811 48.54518557 48.54518557 0 0 0-48.54518556-48.54518557 48.54518557 48.54518557 0 0 0-34.46708111 14.07810333l-281.07662222 281.56207445-281.07662222-281.56207445a48.54518557 48.54518557 0 0 0-34.46708111-14.07810333 48.54518557 48.54518557 0 0 0-48.54518556 48.54518557 48.54518557 48.54518557 0 0 0 14.07810332 34.4670811l350.01078557 349.52533333z m-1e-8-266.9985189A48.54518557 48.54518557 0 0 0 876.08888889 220.7288889a48.54518557 48.54518557 0 0 0-48.54518556-48.54518557 48.54518557 48.54518557 0 0 0-34.46708111 14.07810446l-281.07662222 281.56207331-281.07662222-281.56207331a48.54518557 48.54518557 0 0 0-34.46708111-14.07810446 48.54518557 48.54518557 0 0 0-48.54518556 48.54518557 48.54518557 48.54518557 0 0 0 14.07810333 34.46708109l350.01078556 349.52533335z'>
      </path>
    </svg>
  );
}

function Close(props: { onClick: () => void, style: React.CSSProperties }) {
  return (
    <svg onClick={props.onClick} style={props.style} className='lite-icon' viewBox='0 0 1024 1024' width='22' height='22'>
      <path fill='rgba(255,255,255,0.7)' d='M136.596875 727.26875h750.80625v84.46875H136.596875zM136.596875 212.684375h750.80625v84.46875H136.596875zM136.596875 469.765625h750.80625v84.46875H136.596875z'></path>
    </svg>
  );
}
