import {useState, useEffect} from 'react';
import {YtStatistic, YtPagination, YtTable, YtBtn} from 'common';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import RelateModal from './components/RelateModal';
import {columnsIndex} from './columns';
import './index.less'
import {
    getUserList,
    validUser,
    getRelatedUser
} from '../../../api/platformManage/UserManage.js';
import {Modal, Spin} from 'antd';

import {YtMessage} from 'common';

const Index = ({...props}) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [totalSize, setTotalSize] = useState(1);
    const [relate_totalSize, setRelate_totalSize] = useState(1);
    const [relatedUser, setRelatedUser] = useState([]);
    const [param, setParam] = useState({
        userName: '',
        pageNow: 1,
        pageSize: 5,
    });
    const [list, setList] = useState([]);
    const {
        pageNow,
        pageSize,
    } = {...param}
    //获取用户数据
    useEffect(() => {
        getUserLists(param);
    }, []);
    //查询
    const search = ({userName}) => {
        let p = {...param, userName, pageNow: 1};
        setParam(p);
        getUserLists(p);
    }
    //分页
    const pagination = (pageNow) => {
        let p = {...param, pageNow};
        setParam(p);
        getUserLists(p);
    }
    //操作
    const onOperateClick = ({type, item}) => {
        switch (type) {
            //编辑
            case 'edit':
                //设置当前操作记录项
                setCurrentItem(item);
                //显示弹窗
                setVisible(3);
                break;
            //停用&启用
            case 'delete':
                handleDelete(item)
                break;
            //关联角色
            case 'relate':
                //获取已关联用户
                setCurrentItem(item);
                getRelatedUsers(item.id);
                break;
        }
    }
    //获取已关联用户
    const getRelatedUsers = (id) => {
        setLoading(true)
        getRelatedUser(id).then(res => {
            let arr = []
            res.data.roleList.forEach(item => {
                arr.push(item.roleId)
            })
            setRelatedUser(arr);
            setTimeout(() => {
                setLoading(false)
                setVisible(2);
            }, 500)
        })
    }
    //停用
    const handleDelete = (record) => {
        let typeName = {0: '启用', 1: '停用'}
        let isValid = {
            0: 1,
            1: 0
        }
        Modal.confirm({
            title: '提示',
            content: `是否确认${typeName[record.isValid]}？`,
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                validUser(record.id, isValid[record.isValid]).then(res => {
                    YtMessage.success('操作成功');
                    getUserLists(param);
                })
            }
        });
    }
    //新增弹窗
    const goCreat = () => {
        setCurrentItem({})
        setVisible(1);
    }
    //确认操作
    const onOk = () => {
        getUserLists(param);
        setCurrentItem({})
        setVisible(false);
    }
    //取消操作
    const onCancel = () => {
        setCurrentItem({})
        setVisible(false);
    }
    //关联成功
    const onRelateOk = (item) => {
        setCurrentItem({})
        setVisible(false);
    }
    //用户管理API
    const getUserLists = (param) => {
        setLoading(true)
        getUserList(param).then(res => {
            setList(res.data.result)
            setTotalSize(res.data.pagination.totalSize)
            setLoading(false)
        })
    }
    return (
        <Spin spinning={loading}>
            <div className="account-organization-wrap yt-common-list-pages-wrap">
                <FilterForm onSubmit={search}/>
                <div className="handle-common-action">
                    <YtBtn onClick={goCreat}>新增</YtBtn>
                </div>
                <YtTable
                    columns={columnsIndex}
                    dataSource={list}
                    onOperateClick={onOperateClick}/>
                <YtPagination data={{totalSize, pageNow, pageSize}}
                              onChange={pagination}/>
                <CreatModal data={currentItem}
                            visible={visible}
                            onOk={onOk}
                            onCancel={onCancel}/>
                <RelateModal data={currentItem}
                             relatedUser={relatedUser}
                             visible={visible}
                             onOk={onRelateOk}
                             onCancel={onCancel}/>
            </div>
        </Spin>
    )
}

export default Index;
