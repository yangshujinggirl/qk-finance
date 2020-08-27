import { Form, Select, Row, Col, Modal, Checkbox, Button, Input } from 'antd';
import { useState } from 'react';
import { YtEditModal, YtBtn, YtPagination } from 'common';
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
  const [disabled, setDisabled] = useState([]);
  const [dataPag,setDataPag] = useState({ pageSize:10, pageNow:1, totalSize:0 });
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const goSearch = async () => {
    const data=[
      {
        code:'code',
        name:'name',
        amount:'amount',
        key:1
      },
      {
        code:'code',
        name:'name',
        amount:'amount',
        key:2
      },
      {
        code:'code',
        name:'name',
        amount:'amount',
        key:3
      }
    ]
    setDataSource(data)
  };
  const onSelect = (value) => {
    console.log(value);
    setDisabled(false);
  };
  const handleOk = e => {
    console.log(e);
    setLoading(true)
  };
  const handleCancel = e => {
    form.resetFields();
    props.onCancel();
    setDataSource([]);
    setDisabled(true);
  };
  useEffect(()=>{console.log(form)},[])
  return (
      <YtEditModal
        title="选择资产"
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="search-add-modal-wrap"
        okButtonProps={{loading,disabled}}>
        <Form form={form} {...formItemLayout}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="name1" label="选择债务人">
                <Input autoComplete="off"/>
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
            <YtBtn type="primary" onClick={goSearch} size="free">查询</YtBtn>
          </div>
          <EditTable dataSource={dataSource} onSelect={onSelect}/>
          {
            dataSource.length>0&&
            <YtPagination data={dataPag} />
          }
        </Form>
      </YtEditModal>
  );
}

export default CreatModal;
