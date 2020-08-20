import { Tabs, Form, Row, Col, Modal, Checkbox, Button, Input } from 'antd';
import { useState, useEffect } from 'react';
import { YtTable, YtBtn } from 'common';
import { GetAddApi } from 'api/asset/AssetList';
import { YtMessage } from 'common';
import columns from './columns';
import './index.less';

const formItemLayout = {
  labelCol: {
    span: 10
  },
  wrapperCol: {
    span: 14
  }
};
const { TabPane } = Tabs;
const arr = [
  {
    code: '1',
    key: '1',
    name: 'John Brown',
    amount: '300',
    amounted: '30',
    amountPocess: '30',
  },
  {
    code: '2',
    key: '2',
    name: 'Jim Green',
    amount: '300',
    amounted: '30',
    amountPocess: '30',
  },
  {
    code: '3',
    key: '3',
    name: 'Joe Black',
    amount: '300',
    amounted: '30',
    amountPocess: '30',
  },
  ];
const CreatModal=({...props})=>{
  let [loading, setLoading] = useState(false);
  let [data,setData] = useState([]);

  const handleCancel = e => {
    props.onCancel();
  };

  const onOperateClick=({item,type})=> {
    switch(type){
      case 'edit':
        edit(item)
        break;
      case 'save':
        save();
    }
  }
  const edit = (item) => {
    item.editing = true;
    let currentIdx = data.findIndex((el)=>el.key == item.key);
    data[currentIdx] = {...data[currentIdx],...item};
    data = [...data];
    setData(data);
  };
  const save = () => {

  };
  const rowSelection = {
    type: "checkbox",
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  useEffect(()=>{
    //fetch
    arr.map((el)=>el.editing= false);
    setData(arr);
  },[])
  return (
      <Modal
        width={920}
        title="项目资料"
        visible={props.visible}
        onCancel={handleCancel}
        className="creat-modal"
        footer={null}>
          <Tabs defaultActiveKey="1">
             <TabPane tab="全部资料" key="1">
               <>
                <div className="download-wrap">
                  <YtBtn>批量下载</YtBtn>
                </div>
                 <YtTable
                  rowSelection={rowSelection}
                  select={true}
                  columns={columns}
                  dataSource={data}
                  onOperateClick={onOperateClick}/>
                </>
             </TabPane>
          </Tabs>
      </Modal>
  );
}

export default CreatModal;
