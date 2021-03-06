import React, { Component } from "react";
import { Modal, Button } from "antd";
import FormSV from "./FormSV";
import { CLOSE_MODAL, OPEN_MODAL } from "../constants/qlsvConstants";
import { connect } from "react-redux";
export class ModalSinhVien extends Component {
  render() {
    const handleCancel = () => {
      this.props.onFailed?.current?.resetFields();
      this.props.handleCancel();
    };
    return (
      <>
        <Button type="primary" onClick={this.props.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.props.isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button form="myForm" key="submit" htmlType="submit">
              {this.props.onEditSv ? "Sửa" : "Thêm"}
            </Button>,
            <Button key="cancel" onClick={handleCancel}>
              Cancel
            </Button>,
          ]}
        >
          <FormSV />
        </Modal>
      </>
    );
  }
}

let mapStatetoProps = (state) => {
  return {
    isModalVisible: state.qlsvReducer.isModalVisible,
    onFailed: state.qlsvReducer.onFailed,
    onEditSv: state.qlsvReducer.onEditSv,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => {
      dispatch({
        type: OPEN_MODAL,
      });
    },

    handleCancel: () => {
      dispatch({
        type: CLOSE_MODAL,
      });
    },
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(ModalSinhVien);
