import { YtBreadcrumbName, YtPagination, YtTable, YtBtn, YtCard } from 'common';
import RiseChart from './components/RiseChart';
import { columnsList } from './columns';

function FutureMod({...props}){
  const data=[
    {
      code:'code',
      name:'name',
      amount:'amount',
      key:1
    },
    {
      code:'code',
      name:'name',
      amount:'amount',
      key:2
    },
    {
      code:'code',
      name:'name',
      amount:'amount',
      key:3
    }
  ]
  return <div>
            {props.children}
             <RiseChart />
             <div className="list-action part-same-shadow mt24">
               <YtTable columns={columnsList} dataSource={data} scroll={{ x: 1300 }}/>
               <YtPagination data={{total:500,currentPage:0,limit:15}}/>
             </div>
          </div>
}

export default FutureMod;
