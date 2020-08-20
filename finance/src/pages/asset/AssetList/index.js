import { Button, Statistic, Progress } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { YtBreadcrumbName, YtPagination, YtStatistic, YtTable, YtBtn } from 'common';
import ViewCardPane from '../../components/ViewCardPane';
import SubCrumb from '../components/SubCrumb';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import columnsList from './columns';
import {subCrumbOptions} from '../subCrumbOptions';
import { GetListApi } from 'api/asset/AssetList';
import './index.less'

const data = [
  {
  code: '1',
  key: '1',
  name: 'John Brown',
  amount: '￥300,000.00',
  amounted: '￥300,000.00',
  amountPocess: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
  },
  {
  code: '2',
  key: '2',
  name: 'Jim Green',
  amount: '￥1,256,000.00',
  amounted: '￥1,256,000.00',
  amountPocess: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
  },
  {
  code: '3',
  key: '3',
  name: 'Joe Black',
  amount: '￥120,000.00',
  amounted: '￥120,000.00',
  amountPocess: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
  },
  ];

const FinanceShow=({...props})=> {
  const [visible, setVisible] = useState(false);
  const { id } = props.match.params;
  const goCreat=()=> {
    setVisible(true)
  }
  const onCancel=()=> {
    setVisible(false)
  }
  useEffect(() => {
    GetListApi({id})
    .then((res)=> {
      console.log(res)
    })
  },[id]);
  return(
    <div>
      <YtBreadcrumbName>
        <SubCrumb data={subCrumbOptions(id)} active="2"/>
      </YtBreadcrumbName>
      <div className="finance-company-list-wrap">
        <div className="box-flex">
          <ViewCardPane
            label="累计资产总笔数"
            num="520">
            <div className="box-flex">
              <YtStatistic value="12%" type="up">周同比</YtStatistic>
              <YtStatistic value="12%" type="up">日环比</YtStatistic>
              <YtStatistic value="2笔">本日新增</YtStatistic>
            </div>
          </ViewCardPane>
          <ViewCardPane
            label="累计资产总额(万元)"
            num="520">
            <div className="box-flex">
              <YtStatistic value="12%" type="up">周同比</YtStatistic>
              <YtStatistic value="12%" type="up">日环比</YtStatistic>
              <YtStatistic value="15万">本日新增</YtStatistic>
            </div>
          </ViewCardPane>
          <ViewCardPane
            label="资产平均账期(天)"
            num="520">
            <div className="box-flex">
              <YtStatistic value="12%" type="up">周同比</YtStatistic>
              <YtStatistic value="12%" type="up">日环比</YtStatistic>
              <YtStatistic value="50天">账期</YtStatistic>
            </div>
          </ViewCardPane>
          <ViewCardPane
            label="资产验真比率"
            num="520">
            <div className="box-flex">
              <YtStatistic value="12%" type="up">周同比</YtStatistic>
              <YtStatistic value="12%" type="up">日环比</YtStatistic>
            </div>
          </ViewCardPane>
        </div>
        <div className="yt-common-list-pages-wrap">
          <FilterForm />
          <div className="handle-common-action">
            <YtBtn onClick={goCreat} size="free">+资产包创建</YtBtn>
          </div>
          <YtTable
           scroll={{ x: 1300 }}
           columns={columnsList}
           dataSource={data}/>
          <YtPagination data={{total:500,currentPage:0,limit:15}}/>
          <CreatModal visible={visible} onCancel={onCancel}/>
        </div>
      </div>
    </div>
  )
}

export default FinanceShow;
