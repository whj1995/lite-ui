import * as React from 'react';
import { AutoWidthInput, Button, Checkbox, Collapse, Input, message, Radio, Select, Slider, Switch, Upload } from '../src';

export function App() {
  const [iptValue, setIptValue] = React.useState('AutoWidthInput');
  const [sValue, setSValue] = React.useState('short');
  const [checked, setChecked] = React.useState(false);
  const [radio, setRadio] = React.useState('BB');
  const [slider, setSlider] = React.useState(0);
  const ref: React.RefObject<HTMLInputElement> = React.useRef(null);
  const lastMsgId = React.useRef(-1);

  return (
    <div style={{ display: 'flex' }}>
      <div>
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
          <Select onBlur={() => setChecked(false)} expand={checked} onDownClick={setChecked} style={{ width: 100 }} value={sValue} onChange={setSValue} >
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
      <div style={{ margin: '0 0 0 50px' }}>
        <div>
          <h3>checkbox</h3>
          <Checkbox checked={checked} onChange={setChecked}>开</Checkbox>
        </div>
        <div style={{ width: '300px', position: 'relative' }}>
          <h3>slider</h3>
          <Slider style={{ width: 200 }} max={10} min={-5} value={slider} onChange={(value) => setSlider(value)}></Slider>
          <h3>slider step=2</h3>
          <Slider max={10} min={-5} step={2} value={slider} onChange={(value) => setSlider(value)}></Slider>
        </div>
        <Collapse title='collapse' iconPosition='left' >
          <Collapse title='collapse' iconPosition='right' >
            <div>
              <h3>button</h3>
              <Button>按钮</Button>
              <Button>button</Button>
            </div>
          </Collapse>
        </Collapse>
        <div>
          <h3>Upload</h3>
          <Upload />
        </div>
        <div>
          <h3>message</h3>
          <Button onClick={() => { lastMsgId.current = message.success('xxxx'); }} >success</Button>
          <Button onClick={() => { lastMsgId.current = message.warning('warning'); }} >warning</Button>
          <Button onClick={() => { lastMsgId.current = message.error('errorr'); }} >error</Button>
          <Button onClick={() => { lastMsgId.current = message.loading('loading', 9000); }}>loading</Button>
          <Button onClick={() => message.cancel(lastMsgId.current)} >cancel last msg</Button>
        </div>
      </div>
    </div>
  );
}
