import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../redux/actions";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteStudent(id));
    console.log("delete id", id);
    toast.success("Student deleted successfully");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-center">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark teaxt-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((item) => (
                <tr key={item.id}>
                  <td>{item.id + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>
                    <Link
                      to={`/edit/${item.id}`}
                      className="btn btn-small btn-primary mx-3"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-small btn-danger"
                      onClick={() => deleteHandler(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
