import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { deleteStudentReducer, listStudentReducer, studentAddReducer } from "./reducers/studentReduser";
import { listTeacherReducer, teacherAddReducer } from "./reducers/teacherReduser";

import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  teacherAdd: teacherAddReducer,
  studentAdd:studentAddReducer,
  listStudent:listStudentReducer,
  listTeacher:listTeacherReducer,
  deleteStudent:deleteStudentReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
