import { Table, Progress } from 'antd';
import { Link } from 'react-router-dom'
import './index.less';

function SubCrumb({...props}) {
  return <div className="sub-crumb-mod">
            {
              props.data.map((el)=>(
                <Link to={el.url} className={`scm-item ${props.active==el.key?'active':''}`}>{el.name}</Link>
              ))
            }
        </div>
}
export default SubCrumb;
