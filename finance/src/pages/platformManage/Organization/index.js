import { useState, useEffect } from 'react';
import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import {columnsIndex} from './columns';
import './index.less'
import {getOrgList} from '../../../api/platformManage';

const data = [
  {
    code: '1',
    key: '1',
    name: 'John Brown',
    amount: '300',
    amounted: '+10,000.00',
    amountPocess: '+10,000.00',
    address: 'New York No. 1 Lake Park',
    time0:'2020-08-01',
    time1:'2020-08-01',
    zwf:'民生银行',
    pay:'自贡市金玉农资有限公司',
    paycode:'6226 0101 1010 0456 782'
  },
  {
    code: '2',
    key: '2',
    name: 'Jim Green',
    amount: '300',
    amounted: '10,000.00',
    amountPocess: '10,000.00',
    address: 'London No. 1 Lake Park',
    time0:'2020-08-01',
    time1:'2020-08-01',
    zwf:'民生银行',
    pay:'自贡市金玉农资有限公司',
    paycode:'6226 0101 1010 0456 782',
    test2:'网银导入'
  },
  {
    code: '3',
    key: '3',
    name: 'Joe Black',
    amount: '300',
    amounted: '10,000.00',
    amountPocess: '10,000.00',
    address: 'Sidney No. 1 Lake Park',
    time0:'2020-04-06  11:00:00',
    time1:'2020-08-01',
    zwf:'民生银行',
    pay:'自贡市金玉农资有限公司',
    paycode:'6226 0101 1010 0456 782'
  },
];
const Index=({...props})=>{
    const [visible,setVisible] = useState(false);
    const [currentItem,setCurrentItem] = useState({});
    //组织管理API
    const getOrgLists=(param)=>{
        getOrgList(param).then(res=>{
            console.log(res)
        })
    }
    //获取组织数据
    useEffect(() => {
        getOrgLists();
    },[]);
    const goCreat=()=>{
      setVisible(true);
    }
    const onOk=()=>{
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
      }
    }
    const handleDelete=(record)=> {
      console.log(record)
    }
    return(
      <div className="account-organization-wrap yt-common-list-pages-wrap">
          <FilterForm />
          <div className="handle-common-action">
            <YtBtn onClick={goCreat}>新增</YtBtn>
          </div>
          <YtTable
           columns={columnsIndex}
           dataSource={data}
           onOperateClick={onOperateClick}/>
          <YtPagination data={{total:500,currentPage:0,limit:15}}/>
          <CreatModal visible={visible} onOk={onOk} onCancel={onCancel}/>
      </div>
    )
}

export default Index;
