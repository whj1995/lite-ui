import * as React from 'react';
import { AutoWidthInput, Expand, Input, Radio, Select, Switch } from '../lib';

export function App() {
  const [iptValue, setIptValue] = React.useState('AutoWidthInput');
  const [sValue, setSValue] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [radio, setRadio] = React.useState('BB');
  const ref: React.RefObject<HTMLInputElement> = React.useRef(null);

  return (
    <div>
      <div>
        <h3>Expand</h3>
        <Expand expandColor='#515151' titleColor='#fff' headerColor='rgba(0, 0, 0, 0.2)' title='title' style={{ width: 300 }}>
          <span>xxxxxxxxxxxx</span>
        </Expand>
      </div>
      <div>
        <h3>AutoWidthInput</h3>
        <AutoWidthInput ref={ref} value={iptValue} onChange={(e) => setIptValue(e.target.value)} />
      </div>
      <div>
        <h3>Input</h3>
        <Input value={iptValue} onChange={(e) => setIptValue(e.target.value)} />
      </div>
      <div>
        <h3>Normal-Select</h3>
        <Select style={{ width: 100 }} value={sValue} onChange={setSValue} >
          <Select.Option value=''>无</Select.Option>
          <Select.Option value='long'>长长长长长长长长长长长长</Select.Option>
          <Select.Option value='english'>english</Select.Option>
        </Select>
      </div>
      <div>
        <h3>Input-Select</h3>
        <Select placeholder='placeholder' style={{ width: 100 }} mode='input' value={sValue} onChange={setSValue} >
          <Select.Option value='short'>短</Select.Option>
          <Select.Option value='long'>长长长长长长长长长长长长</Select.Option>
          <Select.Option value='english'>english</Select.Option>
        </Select>
      </div>
      <div>
        <h3>switch</h3>
        <Switch checkedText='开' unCheckedText='off' checked={checked} onChange={(_checked) => setChecked(_checked)} />
      </div>
      <div>
        <h3>radio</h3>
        <Radio.Group value={radio} onChange={setRadio}>
          <Radio value='AA'>A</Radio>
          <Radio value='BB'>B</Radio>
          <Radio value='CC'>C</Radio>
        </Radio.Group>
      </div>
    </div>
  );
}
