import { Form, Upload } from 'antd';
import { YtBtn, YtMessage } from 'common';
import './index.less';
// import filePathOptions from '../StaicFile';

const ImportFile=({...props})=> {
  const goDownLoad=()=> {
    // window.open(filePathOptions[props.fileName]);
  }
  return (
    <div className="handle-download-wrap">
      <YtBtn onClick={goDownLoad}>{props.downText?props.downText:'批量下载'}</YtBtn>
    </div>

  )
}
export default ImportFile;
