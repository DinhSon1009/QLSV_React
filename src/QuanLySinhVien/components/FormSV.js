import React, { Component, createRef } from "react";
import { Form, Input } from "antd";
import {
  ON_FAILED_STATUS,
  SET_DANH_SACH_SV,
  THEM_SINH_VIEN,
} from "../constants/qlsvConstants";
import { connect } from "react-redux";
import { sinhVienServices } from "../svServices/svServices";

export class FormSV extends Component {
  formRef = createRef();
  onFinish = (values) => {
    this.props.sinhVien(values);
    this.props.onEditSv === null &&
      sinhVienServices
        .themSinhVien(values)
        .then((res) => {
          this.formRef.current.resetFields();
          sinhVienServices
            .layDanhSachSinhVien()
            .then((res) => {
              this.props.setDssv(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })

        .catch((err) => {
          console.log(err);
        });
    this.props.onEditSv &&
      sinhVienServices
        .suaSinhVien(this.props.onEditId, values)
        .then((res) => {
          sinhVienServices
            .layDanhSachSinhVien()
            .then((res) => {
              this.props.setDssv(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
  };
  componentDidUpdate() {
    this.props.onEditSv
      ? this.formRef.current.setFieldsValue(this.props.onEditSv)
      : this.formRef.current.resetFields();
  }

  onFinishFailed = (errorInfo) => {
    this.props.onFailed(this.formRef);
  };

  render() {
    let _this = this;
    return (
      <Form
        id="myForm"
        ref={this.formRef}
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={this.props.onEditSv}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="ID"
          name="id"
          rules={[
            {
              required: true,
              message: "Please input id!",
            },
            {
              pattern: /^\d+$/,
              message: "ID can only numbers",
            },
            {
              whitespace: false,
              max: 6,
              message: "ID contains 1-6 digits",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                let index = _this.props.dssv.findIndex((sv) => sv.id === value);
                if (index !== -1 && !_this.props.onEditSv) {
                  return Promise.reject(new Error("Existed ID"));
                }
                return Promise.resolve();
              },
            }),
          ]}
          hasFeedback
        >
          <Input disabled={this.props.onEditSv} />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input name!",
            },
            {
              pattern:
                /[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/,
              message: "Name can only include letters",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (value?.trim().length <= 7) {
                  return Promise.reject(
                    new Error("Name must be at least 8 characters")
                  );
                }
                return Promise.resolve();
              },
            }),
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input email!",
            },
            {
              type: "email",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input phone!",
            },
            {
              pattern: /^\d+$/,
              message: "Please enter only numbers",
            },
            {
              min: 9,
              whitespace: false,
              message: "Phone must be at least 9 characters",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
      </Form>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    editMode: state.qlsvReducer.editMode,
    onEditId: state.qlsvReducer.onEditId,
    onEditSv: state.qlsvReducer.onEditSv,
    isModalVisible: state.qlsvReducer.isModalVisible,
    dssv: state.qlsvReducer.dssv,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sinhVien: (sv) => {
      dispatch({
        type: THEM_SINH_VIEN,
        payload: sv,
      });
    },
    setDssv: (data) => {
      dispatch({
        type: SET_DANH_SACH_SV,
        payload: data,
      });
    },
    onFailed: (obj) => {
      dispatch({
        type: ON_FAILED_STATUS,
        payload: obj,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSV);
