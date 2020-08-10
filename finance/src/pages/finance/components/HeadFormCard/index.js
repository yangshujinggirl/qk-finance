
import './index.less';

function HeadFormCard({...props}) {
  return(
    <div className="form-head-card-wrap">
      <div className="box-flex flex-head">
        <p className="head">{props.title}</p>
        {props.extra}
      </div>
      {
        props.children
      }
    </div>
  )
}

export default HeadFormCard;
