import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function View() {
  const { id } = useParams();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(`http://localhost:3333/students/${id}`);
        setStudent(student.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getStudent();
  }, [id]);

  console.log(id);
  return (
    <>
      <section>
        <div className="grid">
          <div
            className="row"
            style={{ backgroundColor: "orange", color: "white" }}
          >
            <div className="col-md-12">
              <h2 className="text-center p-2">Student List</h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">PhoneNumber</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{id}</th>
                      <td>{student.stuName}</td>
                      <td>{student.email}</td>
                      <td>{student.number}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <Link to={"/"} className="btn btn-primary ms-2">
                BackToHome
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default View;
