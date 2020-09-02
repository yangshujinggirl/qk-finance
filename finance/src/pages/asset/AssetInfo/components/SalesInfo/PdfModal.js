
const PdfModal=({...props})=> {
  return <Modal
          title="Basic Modal"
          visible={visible}
          onOk={props.onOk}
          onCancel={props.onCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
}
