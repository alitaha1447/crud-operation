import React, { useState } from "react";

import axios from "axios";
import List from "./pages/List";

const addStuColor = {
  backgroundColor: "green",
  color: "white",
};

function Home() {
  const [student, setStudent] = useState({
    stuName: "",
    email: "",
    number: "",
  });
  const [status, setStatus] = useState();

  function onTextChange(e) {
    const update = { ...student };
    update[e.target.name] = e.target.value;
    setStudent(update);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/students`, student);
      setStatus(true);
    } catch (error) {
      console.log(error.message);
    }
  }
  if (status) {
    return <Home></Home>;
  }

  return (
    <>
      <section>
        <div className=" bg-success">
          <div className="text-center p-2">
            <h2>CRUD Application</h2>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center p-2" style={addStuColor}>
                <h2>Add Student</h2>
              </div>
              <form className="mt-2">
                <div>
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <input
                        name="stuName"
                        type="text"
                        onChange={onTextChange}
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      {" "}
                      <input
                        name="email"
                        type="email"
                        onChange={onTextChange}
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-xs-12 mt-2">
                      <input
                        name="number"
                        type="number"
                        onChange={onTextChange}
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="row mt-2 ">
                    <div className="col-md-12 text-center ">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={onFormSubmit}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 col-xs-12">
              <List></List>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
