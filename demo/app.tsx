import * as React from 'react';
import { AutoWidthInput, Expand, Input, Select } from '../lib';

export function App() {
  const [iptValue, setIptValue] = React.useState('AutoWidthInput');
  const [sValue, setSValue] = React.useState('english');
  const ref: React.RefObject<HTMLInputElement> = React.useRef(null);

  return (
    <div>
      <div>
        <h3>Expand</h3>
        <Expand title='title' style={{ width: 300 }}>
          <span>xxxxxxxxxxxx</span>
        </Expand>
      </div>
      <div>
        <h3>AutoWidthInput</h3>
        <AutoWidthInput ref={ref}  value={iptValue} onChange={(e) => setIptValue(e.target.value)} />
      </div>
      <div>
        <h3>Input</h3>
        <Input value={iptValue} onChange={(e) => setIptValue(e.target.value)} />
      </div>
      <div>
        <h3>Normal-Select</h3>
        <Select style={{width: 100}} value={sValue} onChange={setSValue} >
          <Select.Option value='short'>短</Select.Option>
          <Select.Option value='long'>长长长长长长长长长长长长</Select.Option>
          <Select.Option value='english'>english</Select.Option>
        </Select>
      </div>
      <div>
        <h3>Input-Select</h3>
        <Select style={{width: 100}} mode='input' value={sValue} onChange={setSValue} >
          <Select.Option value='short'>短</Select.Option>
          <Select.Option value='long'>长长长长长长长长长长长长</Select.Option>
          <Select.Option value='english'>english</Select.Option>
        </Select>
      </div>
    </div>
  );
}
