import * as React from 'react';
import './style.styl';

interface IProps extends React.Props<any> {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  titleColor?: string;
  headerColor?: string;
  expandColor?: string;
}

interface ICrossProps {
  style: React.CSSProperties;
  className?: string;
  cross?: boolean;
  onClick?: () => void;
}

export function Expand(props: IProps) {
  const [expand, setExpand] = React.useState(true);
  return (
    <div style={props.style} className={`lite-expand ${props.className ? props.className : ''}`}>
      <div className='lite-expand-title' style={{ background: props.headerColor }}>
        <Cross style={{ margin: '0 5px 0 3px', color: props.expandColor }} cross={expand} onClick={() => setExpand(!expand)} />
        <span className='lite-expand-title-text' style={{ color: props.titleColor }}>{props.title}</span>
      </div>
      <div className='lite-expand-content' hidden={!expand}>
        {props.children}
      </div>
    </div>
  );
}

function Cross(props: ICrossProps) {
  const fill = typeof props.style.color !== 'undefined' ? props.style.color : '#515151';
  return (
    <svg onClick={props.onClick} className={`${typeof props.className === 'undefined' ? '' : props.className}`} style={{ cursor: 'pointer', ...props.style }} width='18' height='18' viewBox='0 0 1024 1024'>
      <path d='M896 544H128c-17.6 0-32-14.4-32-32s14.4-32 32-32h768c17.6 0 32 14.4 32 32s-14.4 32-32 32z' fill={fill}></path>
      {
        (typeof props.cross === 'undefined' || props.cross === true) &&
        <path d='M512 928c-17.6 0-32-14.4-32-32V128c0-17.6 14.4-32 32-32s32 14.4 32 32v768c0 17.6-14.4 32-32 32z' fill={fill}></path>
      }
    </svg>
  );
}
