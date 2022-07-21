import {
  TEACHER_CREATE_FAIL,
  TEACHER_CREATE_REQUEST,
  TEACHER_CREATE_SUCCESS,
  TEACHER_LIST_FAIL,
  TEACHER_LIST_REQUEST,
  TEACHER_LIST_SUCCESS,
} from "../constants/teacherConstants";

export const teacherAddReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_CREATE_REQUEST:
      return { loading: true };
    case TEACHER_CREATE_SUCCESS:
      return { loading: false, teachers: action.payload };
    case TEACHER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listTeacherReducer = (state = { teacher: [] }, action) => {
  switch (action.type) {
    case TEACHER_LIST_REQUEST:
      return { loading: true, teacher: [] };
    case TEACHER_LIST_SUCCESS:
      return { loading: false, teacher: action.payload };
    case TEACHER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
