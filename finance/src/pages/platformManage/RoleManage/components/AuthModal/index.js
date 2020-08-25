import {Tree, Modal} from 'antd';
import './index.less';
import {YtMessage} from 'common';
import {saveRolePermissionRef, getPermissionTree} from '../../../../../api/platformManage/RoleManage.js'
import {useState, useEffect} from 'react';

const AuthModal = ({...props}) => {
    const {treeData, roleid, defaultSelectedKey} = props;
    const [checkeds, setCheckeds] = useState(defaultSelectedKey);
    const [defaultExpandedKeys, setDefaultExpandedKeys] = useState([]);
    //选中实时回显
    useEffect(() => {
        if (defaultSelectedKey.length) {
            setCheckeds(defaultSelectedKey)
        }
        if (treeData[0]) {
            //默认展开根结点
            setDefaultExpandedKeys([treeData[0].key]);
        }
    }, [treeData, defaultSelectedKey]);
    //确定授权
    const handleOk = async () => {
        saveRolePermissionRef({
            allPermissionId: checkeds.join(','),
            roleid
        }).then(res => {
            YtMessage.success('操作成功');
            setCheckeds([])
            props.onOk && props.onOk();
        }).finally(() => {
            //清空选择
            setTimeout(() => {
                setCheckeds([])
            }, 500)
        })
    };
    //取消选择
    const handleCancel = (e) => {
        setCheckeds([])
        props.onCancel()
    };
    //选择授权对象
    const onCheck = (e) => {
        setCheckeds(e)
        console.log(e);
    };

    return (
        <Modal
            width={520}
            title="授予权限"
            visible={props.visible === 2}
            onOk={handleOk}
            onCancel={handleCancel}
            className="creat-modal">
            <Tree
                checkable
                defaultExpandedKeys={defaultExpandedKeys}
                checkedKeys={checkeds}
                onCheck={onCheck}
                treeData={treeData}/>
        </Modal>
    );
}

export default AuthModal;
