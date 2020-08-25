import {useState, useEffect} from 'react';
import {YtStatistic, YtPagination, YtTable, YtBtn, YtMessage} from 'common';
import {getRoleList, deleteRole, getPermissionTree} from '../../../api/platformManage/RoleManage.js';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import AuthModal from './components/AuthModal';
import {columnsIndex} from './columns';
import './index.less'
import {Modal} from 'antd';

const Index = ({...props}) => {
    const [visible, setVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [totalSize, setTotalSize] = useState(1);
    const [treeData, setTreeData] = useState({});
    const [list, setList] = useState([]);
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([]);
    const [param, setParam] = useState({
        roleName: '',
        pageNow: 1,
        pageSize: 5,
    });
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
    // 获取授权数据
    const getPermissionTrees = (roleId) => {
        getPermissionTree(roleId).then(res => {
            let arr = getTree(res.data)
            setTreeData(arr);
            setTimeout(() => {
                setVisible(2);
            }, 500)
        })
    }
    //处理数据为树结构
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
        //设置回显值
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
        setParam(p);
        getRoleLists(p);
    }
    //分页
    const pagination = (pageNow) => {
        let p = {...param, pageNow};
        setParam(p);
        getRoleLists(p);
    }
    //新增弹窗
    const goCreat = () => {
        setCurrentItem({})
        setVisible(1);
    }
    //确认保存
    const onOk = () => {
        getRoleLists(param);
        setVisible(false);
        setCurrentItem({})
    }
    //取消操作
    const onCancel = () => {
        setCurrentItem({})
        setVisible(false);
        setCurrentItem({})
    }
    //表单操作
    const onOperateClick = ({type, item}) => {
        switch (type) {
            case 'edit':
                setVisible(3);
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
    }
    //取消授权
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
