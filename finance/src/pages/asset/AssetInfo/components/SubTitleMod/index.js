import './index.less';

function SubTitleMod({...props}) {
  return <div className="sub-title-wrap">
          <p className="title-wrap">
            <span className="title-name">{props.title}</span>
          </p>
          {props.children}
        </div>
}

export default SubTitleMod;
