import { Modal, Button } from 'antd';
import { useEffect, useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import { YtBtn } from 'common';
import './index.less';

const YtenlargeImg=({...props})=> {
  const { file } =props;
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);
  const { pdfDocument, pdfPage } = usePdf({ file, page, canvasRef });

  const onCancel=()=> {
    setVisible(false)
  }
  const onShow=()=> {
    setVisible(true)
  }
  return (
    <div className="enlarge-file-components">
      {
        file?
        <div className="wrap">
          <Button onClick={onShow} type="link">查看</Button>
          <Modal
            width={500}
            forceRender={true}
            onOk={onCancel}
            onCancel={onCancel}
            visible={visible}
            footer={null}>
            <div className="enlarge-img-wrap">
              <canvas ref={canvasRef} id="pdf-canvas"/>
              {Boolean(pdfDocument && pdfDocument.numPages) && (
                <div className="pages-pagation">
                  <YtBtn disabled={page === 1} onClick={() => setPage(page - 1)}>
                    上一页
                  </YtBtn>
                  <YtBtn disabled={page === pdfDocument.numPages} onClick={() => setPage(page + 1)}>
                    下一页
                  </YtBtn>
                </div>
              )}
            </div>
          </Modal>
        </div>
        :
        null
      }
    </div>
  )
}

export default YtenlargeImg;
