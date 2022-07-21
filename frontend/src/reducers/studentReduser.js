import {
  STUDENT_CREATE_FAIL,
  STUDENT_CREATE_REQUEST,
  STUDENT_CREATE_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
  STUDENT_DELETE_FAIL,
  STUDENT_DELETE_REQUEST,
  STUDENT_DELETE_SUCCESS,
  STUDENT_LIST_RESET
} from "../constants/studentConstants";

export const studentAddReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_CREATE_REQUEST:
      return { loading: true };
    case STUDENT_CREATE_SUCCESS:
      return { loading: false, student: action.payload };
    case STUDENT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listStudentReducer = (state = { student: [] }, action) => {
  switch (action.type) {
    case STUDENT_LIST_REQUEST:
      return { loading: true, student: [] };
    case STUDENT_LIST_SUCCESS:
      return { loading: false, student: action.payload };
    case STUDENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    case STUDENT_LIST_RESET:
      return { };
    default:
      return state;
  }
};


export const deleteStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_DELETE_REQUEST:
      return { loading: false };
    case STUDENT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case STUDENT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
