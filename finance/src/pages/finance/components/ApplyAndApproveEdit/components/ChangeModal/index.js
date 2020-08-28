import { Form, Select, Row, Col, Modal, Checkbox, Button, Input } from 'antd';
import { useState, useEffect } from 'react';
import { YtEditModal, YtBtn, YtPagination } from 'common';
import { GetSaveReceivablesApi, GetReceivablesListApi } from 'api/finance/ApplyAndApproveEdit';
import EditTable from './EditTable';
import './index.less';

const formItemLayout = {
  labelCol: {
    span: 10
  },
  wrapperCol: {
    span: 14
  }
};
const CreatModal=({...props})=>{
  console.log('CreatModal')
  const [form] = Form.useForm();
  const [list,setList] = useState([])
  const [inputValues,setInputValues] = useState({});
  const [selectedRows, setSelectedRows] = useState([]);
  const [dataPag,setDataPag] = useState({ pageSize:10, pageNow:1, totalSize:0 });
  const [loading, setLoading] = useState(false);
  const { debtors, info } =props;
  //还款计划列表
  const fetchList=(values )=>{
    let params = {
      pageSize:dataPag.pageSize,
      pageNow:dataPag.pageNow,
      packetId:info.packageId,
      industryTypeCode:info.typeCode,
      ...inputValues,
      ...values,
    }
    GetReceivablesListApi(params)
    .then((res)=> {
      const { pagination, data } =res;
      // setDataPag(pagination)
      setList(data)
    })
  }
  const changePage = (pageNow, pageSize) => {
    fetchList({pageNow, pageSize})
  };
  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      setInputValues(values);
      fetchList(values)
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const handleCancel = e => {
    form.resetFields();
    props.onCancel();
    setList([]);
  };
  const onSelect = (value) => {
    setSelectedRows(value)
  };
  const handleOk =()=> {
    setLoading(true)
    let assetsNoStrs = selectedRows.join(',')
    let params = {
      assetsNoStrs,
      packetId:info.packageId,
      industryTypeCode:info.typeCode,
    }
    GetSaveReceivablesApi(params)
    .then((res)=> {
      props.onOk()
      setLoading(false);
      form.resetFields();
    })

  };
  useEffect(()=>{ fetchList() },[])
  return (
      <YtEditModal
        title="选择资产"
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="search-add-modal-wrap"
        okButtonProps={{loading,disabled:selectedRows.length==0}}>
        <Form form={form} {...formItemLayout}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="debtors" label="选择债务人">
                <Select placeholder="请选择" allowClear>
                {
                  debtors.map((el,index)=> (
                    <Select.Option value={el} key={index}>{el}</Select.Option>
                  ))
                }
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="maxRealDate" label="资产最长账期">
                <Input addonAfter="天" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="minRealDate" label="资产最短账期">
                <Input addonAfter="天" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="maxAssetsAmount" label="单笔资产金额不大于">
                <Input addonAfter="天" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="assetAmountScale" label="单笔资产金额不小于">
                <Input addonAfter="%" autoComplete="off"/>
              </Form.Item>
            </Col>
          </Row>
          <div className="search-action">
            <YtBtn type="primary" onClick={onSubmit} size="free">查询</YtBtn>
          </div>
          <EditTable dataSource={list} onSelect={onSelect}/>
          {
            list.length>0&&
            <YtPagination data={dataPag} />
          }
        </Form>
      </YtEditModal>
  );
}

export default CreatModal;
