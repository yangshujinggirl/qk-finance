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
  const { paramsVal } =props;
  let [currentItem,setCurrentItem] =useState({});
  let [loading, setLoading] = useState(false);
  let [selectedRows, setSelectedRows] = useState([]);
  let [data,setData] = useState(props.data);

  const handleCancel = e => {
    props.onCancel();
  };
  const handledownLoad=(ids)=> {
    let value = [ids]?[ids]:selectedRows;
    let params = {
      fileId:value,
      loanNo:paramsVal.loanNo,
      packetId:paramsVal.packageId,
      companyOrgCode:paramsVal.organizationalCode
    }
    GetDownLoadFile(params)
    .then((res) => {
      const { totalUrl } =res.data;
      var  a = document.createElement('a');       
           a.download = 'filename';
           a.style.display = 'none';
           a.href = totalUrl;
           document.body.appendChild(a);                   
           a.click();                         
           document.body.removeChild(a); 
    })
  }

  const onOperateClick=({item,type})=> {
    switch(type){
      case 'edit':
        edit(item,true)
        break;
      case 'save':
        save(item);
        break;
      case 'download':
        handledownLoad(item.fileId);
        break;
    }
  }
  const edit = (item,status) => {
    let currentIdx = data.findIndex((el)=>el.id == item.id);
    item.editing = status;
    data[currentIdx] = {...data[currentIdx],...item};
    data = [...data];
    setCurrentItem(item);
    setData(data);
  };
  const save = async (item) => {
    try {
      const values = await form.validateFields();
      let currentIdx = data.findIndex((el)=>el.id == item.id);
      let fileDesc = values.fields[currentIdx].fileDesc;
      GetSaveFileList({
        fileDesc,
        id:currentItem.id
      })
      .then((res)=>{
        currentItem.fileDesc = fileDesc;
        form.resetFields();
        edit(currentItem,false);
      })
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const rowSelection = {
    type: "checkbox",
    getCheckboxProps: record => ({ disabled: !record.fileNum }),
    onChange: (selectedRowKeys, selectedRows) => {
      let arr=[];
      selectedRows.map((el)=>{
        arr.push(el.fileId);
      })
      setSelectedRows(arr)
    },
  };
  useEffect(()=>{ setData(props.data) },[props.data])
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
                  <YtBtn onClick={()=>handledownLoad()}>批量下载</YtBtn>
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
