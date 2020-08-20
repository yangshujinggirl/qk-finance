import './index.less';

function OdCardPane({...props}){
  return <div className="order-card-panel">
            <p className="card-title">经销商</p>
            <div className="box-flex">
              <div className='flex-item'>
                <p className="field-num">45</p>
                <p className="label-title">一级经销商总数(家)</p>
              </div>
              <div className='flex-item'>
                <p className="field-num">45</p>
                <p className="label-title">二级经销商总数(家)</p>
              </div>
            </div>
          </div>
}

export default OdCardPane;
