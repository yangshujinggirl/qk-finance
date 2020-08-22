import { useState, useEffect } from 'react';
import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import {columnsIndex} from './columns';
import './index.less'
import { getUserList,validUser,relateUser} from '../../../api/platformManage/UserManage.js';
import { Modal} from 'antd';


const Index=({...props})=>{
    const [visible,setVisible] = useState(false);
    const [currentItem,setCurrentItem] = useState({});
    const [totalSize, setTotalSize] = useState(1);

    const [param, setParam] = useState({
        userName: '',
        pageNow: 1,
        pageSize: 1,
    });
    const [list, setList] = useState([]);
    const {
        pageNow,
        pageSize,
    } = {...param}
    //用户管理API
    const getUserLists=(param)=>{
        getUserList(param).then(res=>{
            setList(res.data.data.result)
            setTotalSize(res.data.pagination.totalSize)

            console.log(res)
        })
    }
    //获取用户数据
    useEffect(() => {
        getUserLists(param);
    },[]);
    //查询
    const search=({userName})=>{
        let p = {...param, userName };
        console.log(p)
        setParam(p);
        getUserLists(p);
    }
    //分页
    const pagination=(pageNow)=>{
        let p = {...param, pageNow };
        setParam(p);
        getUserLists(p);
    }
    const goCreat=()=>{
      setVisible(true);
    }
    const onOk=()=>{
        getUserLists(param);
        setVisible(false);
    }
    const onCancel=()=>{
      setCurrentItem({})
      setVisible(false);
    }
    const onOperateClick=({type,item})=>{
      switch(type){
        case 'edit':
          setVisible(true);
          setCurrentItem(item);
          break;
        case 'delete':
          handleDelete(item)
          break;
        case 'relate':
          handleRelate(item)
          break;
      }
    }
    //停用
    const handleDelete=(record)=> {
        Modal.confirm({
            title: '提示',
            content: '是否确认停用？',
            okText: '确认',
            cancelText: '取消',
            onOk:()=>{
                validUser(record.id,isValid).then(res=>{
                    YtMessage.success('操作成功');
                })
            }
        });
        console.log(record)
    }
    //角色关联
    const handleRelate=(record)=> {
        Modal.confirm({
            title: '提示',
            content: '是否确认删除？',
            okText: '确认',
            cancelText: '取消',
            onOk:()=>{
                relateUser({
                    id: "60305",
                    roleIds: "F5AYQN706K6CUL7WPJTXQ1JQ9BKX771M",
                    userId: "I4WTC9OC3TX4VNYOXQCUP8TZUHCZK3DB",
                }).then(res=>{
                    YtMessage.success('操作成功');
                })
            }
        });
        console.log(record)
    }
    return(
      <div className="account-organization-wrap yt-common-list-pages-wrap">
          <FilterForm  onSubmit={search} />
          <div className="handle-common-action">
            <YtBtn onClick={goCreat}>新增</YtBtn>
          </div>
          <YtTable
           columns={columnsIndex}
           dataSource={list}
           onOperateClick={onOperateClick}/>
    <YtPagination data={{totalSize,pageNow,pageSize}} onChange={pagination}/>
    <CreatModal data={currentItem} visible={visible} onOk={onOk} onCancel={onCancel}/>
      </div>
    )
}

export default Index;
