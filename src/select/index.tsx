import * as React from 'react';
import './style.styl';

interface IProps extends React.Props<any> {
  value: string;
  style?: React.CSSProperties;
  className?: string;
  onChange: (value: string) => void;
}

interface IOptProps extends React.Props<any> {
  value: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Select = (props: IProps) => {
  const [expand, setExpand] = React.useState(false);
  const ulRef: React.RefObject<HTMLUListElement> = React.useRef(null);

  const element = (React.Children.toArray(props.children).find((child) => {
    return (child as React.ReactElement<IOptProps>).props.value === props.value;
  }) as React.ReactElement<IOptProps>);

  const text = typeof element === 'undefined' ?
    (React.Children.toArray(props.children)[0] as React.ReactElement<IOptProps>).props.children
    : element.props.children;

  const onTextClick = () => {
    setExpand(!expand);
    setTimeout(() => {
      if (ulRef.current) {
        ulRef.current.focus();
      }
    }, 0);
  };

  return (
    <div className={`lite-select ${props.className ? props.className : ''}`} style={{ ...props.style }}>
      <div className='lite-select-value' onClick={onTextClick}>
        <div className='lite-select-text'>{text}</div>
        <div className='lite-select-down'></div>
      </div>
      {
        <ul hidden={!expand} ref={ulRef} className='lite-select-ul'
          tabIndex={0}
          onBlur={() => setTimeout(() => { setExpand(false); }, 100)}>
          {
            React.Children.map(props.children, (Opt) => {
              const el = (Opt as React.ReactElement<IOptProps>);
              if (!React.isValidElement(el)) {
                return;
              }
              return (
                <li
                  style={{ ...el.props.style }}
                  className={`lite-select-li ${el.props.className ? el.props.className : ''}`}
                  onClick={() => { props.onChange(el.props.value); setExpand(false); }}  >
                  {el.props.children}
                </li>
              );
            })
          }
        </ul>
      }
    </div>
  );
};

Select.Option = Option;

function Option(_props: IOptProps) {
  return null;
}
