import {
  CLOSE_MODAL,
  ON_FAILED_STATUS,
  OPEN_MODAL,
  SET_DANH_SACH_SV,
  THEM_SINH_VIEN,
} from "../constants/qlsvConstants";

let initialState = {
  dssv: [],
  isModalVisible: false,
  onFinish: false,
  onFailed: null,
  onEditId: "",
  onEditSv: null,
};

export const qlsvReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_SV: {
      return {
        ...state,
        dssv: action.payload,
      };
    }
    case THEM_SINH_VIEN: {
      return {
        ...state,
        isModalVisible: false,
        onFinish: true,
      };
    }
    
    case OPEN_MODAL: {
      return {
        ...state,
        isModalVisible: true,
        onFinish: false,
        onEditId:
          action.payload && action.payload.onEditId
            ? action.payload.onEditId
            : "",
        onEditSv:
          action.payload && action.payload.onEditSv
            ? action.payload.onEditSv
            : null,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isModalVisible: false,
        onEditSv: null,
      };
    }
    case ON_FAILED_STATUS: {
      return {
        ...state,
        onFailed: action.payload,
      };
    }
    default:
      return state;
  }
};
