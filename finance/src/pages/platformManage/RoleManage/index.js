import {useState, useEffect} from 'react';
import {YtStatistic, YtPagination, YtTable, YtBtn} from 'common';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import AuthModal from './components/AuthModal';
import {columnsIndex} from './columns';
import './index.less'
import {getRoleList, deleteRole, saveRolePermissionRef} from '../../../api/platformManage/RoleManage.js';
import {Modal} from 'antd';
import {YtMessage} from 'common';
import {getPermissionTree} from "../../../api/platformManage/RoleManage";

const Index = ({...props}) => {
    const [visible, setVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [totalSize, setTotalSize] = useState(1);
    const [treeData, setTreeData] = useState({});
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([]);

    const [param, setParam] = useState({
        roleName: '',
        pageNow: 1,
        pageSize: 5,
    });
    const [list, setList] = useState([]);
    const {
        pageNow,
        pageSize,
    } = {...param}
    // 角色管理API
    const getRoleLists = (param) => {
        getRoleList(param).then(res => {
            setTotalSize(res.data.pagination.totalSize)
            setList(res.data.result)
        })
    }
    // 授权树
    const getPermissionTrees = (roleId) => {
        getPermissionTree(roleId).then(res => {
            let arr = getTree(res.data)
            setTreeData(arr);
            setTimeout(() => {
                setVisible(2);
            }, 500)
        })
    }

    const getTree = (list) => {
        if (!list.length) return
        let arr = []
        let arr2 = []
        list.forEach(item => {
            let obj = {
                title: item.name,
                key: item.id,
                children: getTree(item.children)
            }
            if (item.checked) {
                arr2.push(item.id)
            }
            if (!obj.children) delete obj.children;
            arr.push(obj)
        })
        setDefaultSelectedKeys(arr2)
        return arr;
    }
    // 获取角色数据
    useEffect(() => {
        getRoleLists(param);
    }, []);
    //查询
    const search = ({roleName}) => {
        let p = {...param, roleName};
        console.log(p)
        setParam(p);
        getRoleLists(p);
    }
    //分页
    const pagination = (pageNow) => {
        let p = {...param, pageNow};
        setParam(p);
        getRoleLists(p);
    }
    const goCreat = () => {
        setCurrentItem({})
        setVisible(1);
    }
    const onOk = () => {
        getRoleLists(param);
        setVisible(false);
        setCurrentItem({})
    }
    const onCancel = () => {
        setCurrentItem({})
        setVisible(false);
        setCurrentItem({})
    }
    const onOperateClick = ({type, item}) => {
        switch (type) {
            case 'edit':
                setVisible(1);
                setCurrentItem(item);
                break;
            case 'delete':
                handleDelete(item)
                break;
            case 'auth':
                getPermissionTrees(item.roleId);
                setCurrentItem(item);
                break;
        }
    }
    //删除
    const handleDelete = (record) => {
        Modal.confirm({
            title: '提示',
            content: '是否确认删除？',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                deleteRole(record.id).then(res => {
                    YtMessage.success('删除成功');
                    getRoleLists(param);
                })
            }
        });
        console.log(record)
    }
    const onAuthOk = (item) => {
        setVisible(false);
    }
    return (
        <div className="account-organization-wrap yt-common-list-pages-wrap">
            <FilterForm onSubmit={search}/>
            <div className="handle-common-action">
                <YtBtn onClick={goCreat}>新增</YtBtn>
            </div>
            <YtTable
                columns={columnsIndex}
                dataSource={list}
                onOperateClick={onOperateClick}/>
            <YtPagination data={{totalSize, pageNow, pageSize}} onChange={pagination}/>
            <CreatModal data={currentItem} visible={visible} onOk={onOk} onCancel={onCancel}/>
            <AuthModal treeData={treeData}
                       roleid={currentItem.roleId}
                       defaultSelectedKey={defaultSelectedKeys}
                       visible={visible}
                       onOk={onAuthOk}
                       onCancel={onCancel}/>
        </div>
    )
}

export default Index;
