import './index.less';

function Arrow({...props}){
  return <div className={`arrow-square-wrap ${props.className}`}>
            <div className="arrow-square-inner">
              <span className="arrow-out"></span>
              <span className="arrow-inner"></span>
            </div>
          </div>
}

export default Arrow;
