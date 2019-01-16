import * as React from 'react';
import './style.styl';

type IMode = 'normal' | 'input';

interface IProps extends React.Props<any> {
  value: string;
  mode?: IMode;
  style?: React.CSSProperties;
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

interface IOptProps extends React.Props<any> {
  value: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Select = (props: IProps) => {
  const mode = typeof props.mode === 'undefined' ? 'normal' : props.mode;
  const [expand, setExpand] = React.useState(false);
  const ulRef: React.RefObject<HTMLUListElement> = React.useRef(null);
  const childs = React.Children.toArray(props.children) as Array<React.ReactElement<IOptProps>>;

  const element = childs.find((child) => {
    return (child as React.ReactElement<IOptProps>).props.value === props.value;
  }) as React.ReactElement<IOptProps>;

  let text = '';
  if (typeof element !== 'undefined' && typeof element.props.children === 'string') {
    text = element.props.children;
  }
  if (typeof element === 'undefined' && childs.length !== 0 && typeof childs[0].props.children === 'string') {
    text = childs[0].props.children;
  }

  const onTextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isInput(e.target)) {
      return;
    }
    setExpand(!expand);
    setTimeout(() => {
      if (ulRef.current) {
        ulRef.current.focus();
      }
    }, 0);
  };

  return (
    <div className={`lite-select ${props.className ? props.className : ''}`} style={{ ...props.style }}>
      <div className='lite-select-value' onClick={onTextClick} >
        {mode === 'normal' && <div className='lite-select-text'>{text}</div>}
        {
          mode === 'input' &&
          <input
            placeholder={props.placeholder}
            className='lite-select-ipt'
            style={{ ...props.style }}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
          />
        }
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
                  onClick={() => { el.props.value !== props.value && props.onChange(el.props.value); setExpand(false); }}  >
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

function isInput(el: any): el is HTMLInputElement {
  return el.nodeName === 'INPUT';
}
