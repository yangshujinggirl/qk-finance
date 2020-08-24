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
  const treeData=props.data;

    const handleOk = async() => {
    try {
      saveRolePermissionRef().then(res=>{
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
        className="creat-modal">
          <Tree
              // onExpand={onExpand}
              // expandedKeys={expandedKeys}
              // autoExpandParent={autoExpandParent}
              // onCheck={onCheck}
              // checkedKeys={checkedKeys}
              // onSelect={onSelect}
              // selectedKeys={selectedKeys}
              treeData={treeData}
          />
      </Modal>
  );
}

export default CreatModal;
