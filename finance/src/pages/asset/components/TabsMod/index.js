import { Radio } from 'antd';
import './index.less';

function TabsMod({...props}) {
  return <div className="common-tabs-radio-wrap">
          <Radio.Group
            className="common-tabs-radio"
            onChange={props.onChange}
            value={props.checkedVal}>
            {
              props.options&&props.options.map((el)=>(
                <Radio.Button value={el.key} key={el.key}>{el.title}</Radio.Button>
              ))
            }
            </Radio.Group>
        </div>
}

export default TabsMod;
