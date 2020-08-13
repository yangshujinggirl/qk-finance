import { Table, Progress } from 'antd';
import { Link } from 'react-router-dom'
import './index.less';

function SubCrumb({...props}) {
  return <div className="sub-crumb-mod">
            {
              props.data.map((el,index)=>(
                <Link to={el.url} className={`scm-item ${props.active==el.key?'active':''}`} key={index}>{el.name}</Link>
              ))
            }
        </div>
}
export default SubCrumb;
