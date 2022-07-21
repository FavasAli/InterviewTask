import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listStudents, studentDelete } from "../actions/studentActions";
import { listTeachers, teacherDelete } from "../actions/teacherActions";
import { STUDENT_LIST_RESET } from "../constants/studentConstants";

const HomeScreen = () => {
  const [filter, setFilter] = useState("");

  const listTeacher = useSelector((state) => state.listTeacher);
  const { error, teacher, loading } = listTeacher;

  const listStudent = useSelector((state) => state.listStudent);
  const { error: errros, student, loading: loadings } = listStudent;

  let index = 1;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("student", student);
    dispatch(listStudents());
    dispatch(listTeachers());

    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  const clickTeacherHandler = (e) => {
    e.preventDefault();
    navigate("/addteacher");
  };

  const clickStudentHandler = (e) => {
    e.preventDefault();
    navigate("/addstudent");
  };

  const deleteStudentHandler = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(studentDelete(id));
    }

    // const TeacherHandler = (id) => {
    //   if (window.confirm("Are you sure ?")) {
    //     dispatch(teacherDelete(id));
    //   }
    // };
  };
  return (
    <>
      <Container>
        <input
          value={filter}
          placeholder="Enter name"
          type="text"
          onChange={(e) => setFilter(e.target.value)}
        />
        <h1>TEACHERS</h1>
        <Table striped bordered hover size="sm">
          {loading && <Loader />}
          {error && <Message variant="danger">{error}</Message>}
          <thead>
            <tr>
              <th>##</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {teacher
              ? teacher
                  .filter((item) => {
                    if (item === "") {
                      return item;
                    } else if (
                      item.name.toLowerCase().includes(filter.toLowerCase())
                    ) {
                      return item;
                    }
                  })

                  .map((data) => (
                    <tr key={data._id}>
                      <td>{index++}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => {
                            if (window.confirm("Are you sure ?")) {
                              dispatch(teacherDelete(data._id));
                              dispatch({ type: STUDENT_LIST_RESET });

                            }
                          }}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))
              : "No data"}
          </tbody>
        </Table>
        <Button type="submit" onClick={clickTeacherHandler}>
          Add More
        </Button>
      </Container>

      <br />

      <Container>
        <input
          value={filter}
          placeholder="Enter name"
          type="text"
          onChange={(e) => setFilter(e.target.value)}
        />
        <h1>STUDENTS</h1>
        <Table striped bordered hover size="sm">
          {loading && <Loader />}
          {error && <Message variant="danger">{error}</Message>}
          <thead>
            <tr>
              <th>##</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {student
              ? student
                  .filter((item) => {
                    if (item === "") {
                      return item;
                    } else if (
                      item.name.toLowerCase().includes(filter.toLowerCase())
                    ) {
                      return item;
                    }
                  })

                  .map((data) => (
                    <tr key={data._id}>
                      <td>{index++}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteStudentHandler(data._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))
              : "No data"}
          </tbody>
        </Table>
        <Button type="submit" onClick={clickStudentHandler}>
          Add More
        </Button>
      </Container>
    </>
  );
};

export default HomeScreen;
