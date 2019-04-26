import * as React from 'react';
import './style.styl';

interface IProps {
  label?: string;
  onchange?: (files: FileList | null) => void;
}

export function Upload(props: IProps) {
  const iptRef: React.MutableRefObject<HTMLInputElement | null> = React.useRef(null);
  const label = typeof props.label === 'undefined' ? '选择文件' : props.label;

  const handleUpload = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    props.onchange && props.onchange(e.target.files);
  }, []);

  return (
    <div className='lite-upload' onClick={() => { iptRef.current && iptRef.current.click(); }}>
      {label}
      <input style={{ display: 'none' }} ref={iptRef} type='file' onChange={handleUpload} />
    </div>
  );
}
