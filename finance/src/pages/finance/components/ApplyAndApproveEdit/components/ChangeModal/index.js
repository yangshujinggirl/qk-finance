import { Form, Select, Row, Col, Modal, Checkbox, Button, Input } from 'antd';
import { useState } from 'react';
import { YtEditModal, YtBtn } from 'common';
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
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState([]);
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
                <Select placeholder="请选择" allowClear={true}>
                  <Select.Option value="1" key="1">
                    1
                  </Select.Option>
                  <Select.Option value="2" key="2">
                    2
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="zq1" label="单笔资产金额不小于">
                <Input addonAfter="天" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="zq2" label="资产最短账期">
                <Input addonAfter="天" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="db1" label="单笔资产金额不大于">
                <Input addonAfter="元" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="db2" label="单笔资产/总金额不大于">
                <Input addonAfter="%" autoComplete="off"/>
              </Form.Item>
            </Col>
          </Row>
          <div className="search-action">
            <YtBtn type="primary" onClick={goSearch} size="free">查询</YtBtn>
          </div>
          <EditTable dataSource={dataSource} onSelect={onSelect}/>
        </Form>
      </YtEditModal>
  );
}

export default CreatModal;
