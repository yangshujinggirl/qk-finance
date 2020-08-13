import ViewCardPane from '../../../../components/ViewCardPane';
import { YtStatistic } from 'common';

function TotalCount({...props}){
  const { data } = props;
  return <div className="box-flex">
              {
                data.map((el,index)=>(
                  <ViewCardPane label={el.name} num={el.num} key={index}>
                    <YtStatistic value={el.value}>{el.desc}</YtStatistic>
                  </ViewCardPane>
                ))
              }
        </div>
}

export default TotalCount;
