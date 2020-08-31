import { Form, Row, Col, Modal, Checkbox, Button, Input } from 'antd';
import { useState } from 'react';
import { YtMessage, YtEditModal, YtBtn } from 'common';
import EditTable from './EditTable';
import { GetChooseListApi, GetAddAssetApi } from 'api/asset/AssetPackageInfo';
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
  const [dataPag,setDataPag] = useState({ pageNow:1, pageSize:5, totalSize:0 });
  const { industryTypeCode, info } =props;
  const [disabled, setDisabled] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const goSearch = async () => {
    try {
      const values = await form.validateFields();
      fetchList(values)
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }

  };
  const fetchList=(values)=> {
    let params = {
      industryTypeCode,
      enterpriseId:info.enterpriseId,
      packetId:info.packetId,
      pageNow:dataPag.pageNow,
      pageSize:dataPag.pageSize,
      ...values
    }
    GetChooseListApi(params)
    .then((res)=> {
      const { pagination, result } =res.data;
      const { pageNow, pageSize, totalSize } =pagination;
      result.map((el,index)=>el.key=index)
      setDataSource(result);
      setDataPag({pageNow, pageSize, totalSize})
    })
  }
  const onSelect = (value) => {
    let selArr = value.map((el) =>{ return el.assetNo })
    let selectStr = selArr.join(',');
    setSelectedRows(selectStr)
  };
  const handleOk =()=> {
    let params = {
      industryTypeCode,
      assetsNoStrs:selectedRows,
      packetId:info.packetId,
      enterpriseId:info.enterpriseId,
      packetName:info.packetName
    }
    setLoading(true)
    GetAddAssetApi(params)
    .then((res)=> {
      setLoading(false)
      YtMessage.success('操作成功');
      props.upDateList();
      handleCancel();
    })

  };
  const handleCancel = e => {
    form.resetFields();
    props.onCancel();
    setDataSource([]);
    setDisabled(true);
  };
  return (
      <YtEditModal
        title="新增"
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="search-add-modal-wrap"
        okButtonProps={{loading,disabled:selectedRows.length==0}}>
        <Form form={form} {...formItemLayout}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="zq1" label="资产最长账期">
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
          <EditTable dataSource={dataSource} onSelect={onSelect} dataPag={dataPag}/>
        </Form>
      </YtEditModal>
  );
}

export default CreatModal;
