import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { editStudent } from "../redux/actions";

const EditContact = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state) => state.students);
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const updateHandler = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkName = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.name === name
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
    );

    if (!name || !email || !number) {
      return toast.warning("Please fill all the input fields");
    }

    if (checkName) {
      return toast.error("This name already exists");
    }
    if (checkEmail) {
      return toast.error("This email already exists");
    }
    if (checkNumber) {
      return toast.error("This number already exists");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch(editStudent(data));
    toast.success("Student updated successfully");
    setName("");
    setEmail("");
    setNumber("");
    navigate("/");
  };
  return (
    <div>
      {currentContact ? (
        <div className="container">
          <h1 className="d-3 text-center my-5">Edit Student {id}</h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={updateHandler}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update Student"
                    className="btn btn-dark mt-3"
                  />
                  <Link to="/" className="btn btn-danger mt-3 mx-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h1>Student with id {id} does not exist</h1>
      )}
    </div>
  );
};

export default EditContact;
