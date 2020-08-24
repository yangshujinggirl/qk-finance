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
  const {treeData,defaultSelectedKeys,roleid}=props;
    const [checkeds, setCheckeds] = useState([]);
    console.log(defaultSelectedKeys);
    // const defaultExpandedKeys=treeData[0]&&treeData[0].key
    const handleOk = async() => {
    try {
      saveRolePermissionRef({
          allPermissionId:checkeds.join(','),
          roleid
      }).then(res=>{
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
  const onCheck = (e) => {
      setCheckeds(e)
      console.log(e);
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
             checkable
             defaultSelectedKeys={defaultSelectedKeys}
              onCheck={onCheck}/>
      </Modal>
  );
}

export default CreatModal;
