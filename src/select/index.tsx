import * as React from 'react';
import './style.styl';

type IMode = 'normal' | 'input';

interface IProps extends React.Props<any> {
  value: string;
  mode?: IMode;
  style?: React.CSSProperties;
  className?: string;
  placeholder?: string;
  expand?: boolean;
  onChange?: (value: string) => void;
  onDownClick?: (expand: boolean) => void;
  onBlur?: () => void;
}

interface IOptProps extends React.Props<any> {
  value: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Select = (props: IProps) => {
  const mode = typeof props.mode === 'undefined' ? 'normal' : props.mode;

  // tslint:disable-next-line: prefer-const
  let [expand, setExpand] = React.useState(false);
  expand = typeof props.expand === 'undefined' ? expand : props.expand;

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
    props.onDownClick && props.onDownClick(!expand);
    typeof props.expand === 'undefined' && setExpand(!expand);
    setTimeout(() => {
      if (ulRef.current) {
        ulRef.current.focus();
      }
    }, 0);
  };

  const handleSelectClick = (el: React.ReactElement<IOptProps>) => {
    if (el.props.value !== props.value && props.onChange) {
      props.onChange(el.props.value);
    }
    props.onDownClick && props.onDownClick(!expand);
    typeof props.expand === 'undefined' && setExpand(false);
  };

  return (
    <div className={`lite-select ${props.className ? props.className : ''}`} style={{ ...props.style }}>
      <div className='lite-select-value' >
        {mode === 'normal' && <div onClick={onTextClick} className='lite-select-text'>{text}</div>}
        {
          mode === 'input' &&
          <input
            placeholder={props.placeholder}
            className='lite-select-ipt'
            style={{ ...props.style }}
            value={text}
            onChange={(e) => props.onChange && props.onChange(e.target.value)}
          />
        }
        <div onClick={onTextClick} className='lite-select-down'></div>
      </div>
      {
        <ul hidden={!expand} ref={ulRef} className='lite-select-ul'
          tabIndex={0}
          onBlur={() => setTimeout(() => { props.onBlur && props.onBlur(); setExpand(false); }, 100)}>
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
                  onClick={() => handleSelectClick(el)}  >
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
