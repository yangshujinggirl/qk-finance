import { Progress } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { YtPagination, YtTable, YtBtn } from 'common';
import ViewCardPane from '../../../../components/ViewCardPane';
import FilterForm from '../FilterForm';
import { columnsList } from '../../columns';
import { GetListApi } from 'api/finance/FinanceCompanyView';
import './index.less'

const Index=({...props})=> {
  const [list,setList] = useState([])
  const [dataPag,setDataPag] = useState({ pageSize:10, pageNow:1, totalSize:0 });
  const [inputValues,setInputValues] = useState({});

  const fetchList=(values )=>{
    let params = {
      pageSize:dataPag.pageSize,
      pageNow:dataPag.pageNow,
      ...inputValues,
      ...values
    }
    GetListApi(params)
    .then((res)=> {
      const { pagination, result } =res.data;
      let { pageSize, pageNow, totalSize } = pagination;
      result.map((el,index)=>{index++; el.key = index})
      setDataPag({pageSize, pageNow, totalSize});
      setList(result)
    })
  }
  const onSubmit = params => {
    setInputValues(params);
    fetchList(params)
  };
  const changePage = (pageNow, pageSize) => {
    fetchList({pageNow, pageSize})
  };
  useEffect(() => { fetchList() },[]);
  return(
    <div className="finance-company-list-wrap yt-common-list-pages-wrap">
        <FilterForm onSubmit={onSubmit}/>
        <YtTable columns={columnsList} dataSource={list} scroll={{ x: 1300 }}/>
        {
          list.length>0&&
          <YtPagination data={dataPag} onChange={changePage}/>
        }
    </div>
  )
}

export default Index;
