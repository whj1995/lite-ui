import * as React from 'react';
import { Input } from '../input';

const hiddenSpanStyle: React.CSSProperties = {
  visibility: 'hidden',
  display: 'inline-block',
  position: 'absolute',
  boxSizing: 'border-box',
  zIndex: -10,
  fontSize: '12px',
  fontFamily: 'Arial'
};

const iptStyle: React.CSSProperties = {
  boxSizing: 'border-box',
  fontSize: '12px',
  fontFamily: 'Arial'
};

export const AutoWidthInput = React.forwardRef((props: React.InputHTMLAttributes<HTMLInputElement>, ref: React.Ref<HTMLInputElement>) => {
  const [width, setWidth] = React.useState(12);
  const hiddenRef: React.RefObject<HTMLSpanElement> = React.useRef(null);
  const { onChange, style, type, ...otherProps } = props;

  React.useEffect(() => {
    setWidth(parseInt(window.getComputedStyle(hiddenRef.current!).width as string, 10) + 13);
  }, [props.value]);

  return (
    <div className={props.className} style={{ display: 'inline-block', ...props.style }}>
      <Input
        ref={ref}
        type='text'
        style={{ width, ...iptStyle, ...props.style }}
        {...otherProps}
        value={props.value}
        onChange={(e) => {
          props.onChange && props.onChange(e);
        }}
      />
      <span style={hiddenSpanStyle} ref={hiddenRef}>{props.value}</span>
    </div>
  );
});
