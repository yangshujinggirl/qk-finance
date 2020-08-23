import { Form, Tree, Row, Radio, Col, Modal, Checkbox, Button, Input } from 'antd';
import './index.less';
import { YtMessage } from 'common';
import {saveRolePermissionRef,getPermissionTree} from '../../../../../api/platformManage/RoleManage.js'
import { useState, useEffect } from 'react';


const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};
const CreatModal=({...props})=>{
  const [form] = Form.useForm();
  const [treeData,setTreeData] = useState({});

  const {roleId}=props.data;

    const handleOk = async() => {
    try {
      const values = await form.validateFields();
      console.log(values)
      saveRolePermissionRef({...values,id}).then(res=>{
          YtMessage.success('操作成功');
          props.onOk && props.onOk(values);
      })

    } catch (errorInfo) {

        console.log("Failed:", errorInfo);
    }
  };
  const handleCancel = (e) => {
    props.onCancel()
  };

  return (
      <Modal
        width={520}
        title="授予权限"
        visible={props.visible===2}
        onOk={handleOk}
        onCancel={handleCancel}
        className="creat-modal"
        footer={null}>
        <Form form={form} name="control-hooks" {...formItemLayout}>
          <Tree
              checkable
              // onExpand={onExpand}
              // expandedKeys={expandedKeys}
              // autoExpandParent={autoExpandParent}
              // onCheck={onCheck}
              // checkedKeys={checkedKeys}
              // onSelect={onSelect}
              // selectedKeys={selectedKeys}
              // treeData={treeData}
          />
          <div className="handle-item">
            <Button onClick={handleCancel} className="reset-btn">取消</Button>
            <Button type="primary" onClick={handleOk} className="creat-btn">保存</Button>
          </div>
        </Form>
      </Modal>
  );
}

export default CreatModal;
