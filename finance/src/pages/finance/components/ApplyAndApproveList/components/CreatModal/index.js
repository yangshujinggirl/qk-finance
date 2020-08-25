import { Tabs, Form, Row, Col, Modal, Checkbox, Button, Input } from 'antd';
import { useState, useEffect } from 'react';
import { YtTable, YtBtn } from 'common';
import { GetAddApi } from 'api/asset/AssetList';
import { YtMessage } from 'common';
import columns from './columns';
import { GetDownLoadFile, GetSaveFileList } from 'api/finance/FinanceManagement';
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
const CreatModal=({...props})=>{
  const [form] = Form.useForm();
  let [currentItem,setCurrentItem] =useState({});
  let dataSource = [...props.data];
  let [loading, setLoading] = useState(false);
  let [data,setData] = useState(dataSource);

  const handleCancel = e => {
    props.onCancel();
  };
  const handledownLoad=(values)=> {
    GetDownLoadFile()
    .then((res) => {
      console.log(res)
    })
  }

  const onOperateClick=({item,type})=> {
    switch(type){
      case 'edit':
        edit(item,true)
        break;
      case 'save':
        save();
        break;
      case 'download':
        handledownLoad();
        break;
    }
  }
  const edit = (item,status) => {
    let currentIdx = data.findIndex((el)=>el.key == item.key);
    item.editing = status;
    data[currentIdx] = {...data[currentIdx],...item};
    data = [...data];
    setCurrentItem(item);
    setData(data);
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      let fileDesc = values.fields[0].fileDesc;
      GetSaveFileList({
        fileDesc,
        id:currentItem.id
      })
      .then((res)=>{
        currentItem.fileDesc = fileDesc;
        edit(currentItem,false)
      })
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const rowSelection = {
    type: "checkbox",
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  useEffect(()=>{
    setData(props.data)
  },[props.data])
  return (
      <Modal
        width={920}
        title="项目资料"
        visible={props.visible}
        onCancel={handleCancel}
        className="creat-modal"
        footer={null}>
        <Form form={form}>
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
        </Form>
      </Modal>
  );
}

export default CreatModal;
