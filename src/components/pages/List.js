import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Home from "./components/Home";

const addStuColor = {
  backgroundColor: "green",
  color: "white",
};

function List() {
  const [students, setStudents] = useState([]);
  // const [status, setStatus] = useState();

  useEffect(() => {
    async function getAllStudent() {
      try {
        const students = await axios.get("http://localhost:3333/students");
        setStudents(students.data);
      } catch (error) {}
    }
    getAllStudent();
  }, []);

  const handleDelete = (id) => async () => {
    await axios.delete(`http://localhost:3333/students/${id}`);

    var newStudent = students.filter((item) => {
      console.log("a " + item.id);
      console.log("b " + id);
      return item.id !== id;
    });
    console.log(newStudent);
    setStudents(newStudent);
  };
  // async function handleDelete(id) {
  //   await axios.delete(`http://localhost:3333/students/${id}`);
  //   // setStatus(true);
  //   var newStudent = students.filter((item) => {
  //     console.log(item.id);
  //     console.log(id);
  //     return item.id === id;
  //   });
  //   console.log(newStudent);
  //   setStudents(newStudent);
  // }
  // if (status) {
  //   return <List></List>;
  // }
  return (
    <>
      <div className="text-center p-2" style={addStuColor}>
        <h2>Student List</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.stuName}</td>
                <td>{student.email}</td>
                <td>
                  <Link
                    to={`/pages/view/${student.id}`}
                    className="btn btn-warning  my-1 mx-2"
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                  <Link
                    to={`/pages/edit/${student.id}`}
                    className="btn btn-primary  my-1 mx-2"
                  >
                    <i className="fa fa-pen"></i>
                  </Link>
                  <button
                    to={``}
                    className="btn btn-danger  my-1 mx-2"
                    onClick={handleDelete(student.id)}
                    // onClick={() => {
                    //   handleDelete(student.id);
                    // }}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default List;
