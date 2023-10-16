import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    stuName: "",
    email: "",
  });

  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(`http://localhost:3333/students/${id}`);
        setStudent(student.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getStudent();
  }, [id]);

  function onTextChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/students/${id}`, student);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <section>
        <div className="grid">
          <div
            className="row"
            style={{ backgroundColor: "orange", color: "white" }}
          >
            <div className="col-md-12">
              <h2 className="text-center p-2">Edit Student</h2>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          name="id"
                          type="text"
                          value={student.id}
                          className="form-control"
                          onChange={onTextChange}
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          name="stuName"
                          type="text"
                          value={student.stuName}
                          className="form-control"
                          onChange={onTextChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          name="email"
                          type="email"
                          value={student.email}
                          className="form-control"
                          onChange={onTextChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <button className="btn btn-primary ms-2" onClick={onFormSubmit}>
                Update
              </button>
            </div>
          </div>
          <div className="row text-center mt-2">
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

export default Edit;
