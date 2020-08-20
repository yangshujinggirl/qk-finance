import { Popover } from 'antd';
import { YtTable, YtBtn } from 'common';

const columns = [
  {
  title: '债务人类型',
  dataIndex: 'code',
  },
  {
  title: '债务企业名称',
  dataIndex: 'name',
  },
  {
  title: '债务人法人/个人名称',
  dataIndex: 'amount',
  },
  {
  title: '营业执照',
  dataIndex: 'amounted',
  },
  {
  title: '身份证',
  dataIndex: 'zwf',
  },
  {
  title: '联系电话',
  dataIndex: 'pay',
  },
  {
  title: '联系地址',
  dataIndex: 'lxdz',
  },
  {
  title: '债权债务人合作协议',
  dataIndex: 'zqzw',
  },
];

function PopoverMod({...props}){
  const content = (
    <YtTable
      columns={columns}
      dataSource={props.dataSource}/>
  );
  return <Popover content={content} trigger="hover" placement="bottom">
          <span className="link-tips">关联债务人</span>
        </Popover>
}
export default PopoverMod;
