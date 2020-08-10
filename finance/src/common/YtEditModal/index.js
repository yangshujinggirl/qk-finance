import { Form, Row, Col, Modal, Checkbox, Button, Input } from 'antd';
import { useState } from 'react';
import { YtBtn } from 'common';
import './index.less';

const EditModal=({...props})=>{
  return (
      <Modal width={920} {...props} className="search-add-modal-wrap">
        <div className="search-form-action">{props.children}</div>
      </Modal>
  );
}

export default EditModal;
