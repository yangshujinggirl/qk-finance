import { Statistic, Spin } from 'antd';
import { LoadContext } from 'common';
import { Sessions } from 'utils';

function PagesControll({...props}){
    let spinloading = Sessions.get('loadCount')=='0'?false:true;
  return  <Spin spinning={spinloading}>
            {props.children}
          </Spin>
}

export default PagesControll;
