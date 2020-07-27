
import './index.less';

function HeadFormCard({...props}) {
  return(
    <div className="form-head-card-wrap">
      <p className="head">{props.title}</p>
      {
        props.children
      }
    </div>
  )
}

export default HeadFormCard;
