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
            console.log(res)
        })
    }
    // 授权树
    const getPermissionTrees=(roleId)=>{
        getPermissionTree(roleId).then(res=>{
            // checked: false
            // chkDisabled: false
            // icon: "/admin/js/ztree/3.5.17/css/zTreeStyle/img/diy/1_open.png"
            // id: "O6G64S18HSSEGHM7XMHE00765LKT8E30"
            // level: 0
            // name: "全部权限"
            // open: true
            // pId: ""
            // parent: false
            // permission_fk: "O6G64S18HSSEGHM7XMHE00765LKT8E30"
            // {
            //     title: '0-1',
            //     key: '0-1',
            //     children: [
            //     { title: '0-1-0-0', key: '0-1-0-0' },
            //     { title: '0-1-0-1', key: '0-1-0-1' },
            //     { title: '0-1-0-2', key: '0-1-0-2' },
            // ],
            // },
            let arr=[]
            res.data.forEach(item=>{
                let children=[]
                let obj={
                    title:item.name,
                    key:item.id,
                    children
                }
                arr.push(obj);
                arr.forEach(item2=>{
                    if(item2.key==item.pId){
                        let o={
                            title:item2.name,
                            key:item2.id,
                        }
                        obj.children.push(o)
                    }
                })
            })
console.log(arr);
            setTreeData(res.data.result)
            console.log(res)
        })
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
        setVisible(1);
    }
    const onOk = () => {
        getRoleLists(param);
        setVisible(false);
    }
    const onCancel = () => {
        setCurrentItem({})
        setVisible(false);
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
                setVisible(2);
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
        handleAuth(item);
        setVisible(false);
    }
    //授权
    const handleAuth = (record) => {
        saveRolePermissionRef({roleid: record.roleid, allPermissionId: ''}).then(res => {
            YtMessage.success('授权成功');
        });
        console.log(record)
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
            <AuthModal data={currentItem} visible={visible} onOk={onAuthOk} onCancel={onCancel}/>
        </div>
    )
}

export default Index;
