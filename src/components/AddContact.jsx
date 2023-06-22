import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addStudent } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const contacts = useSelector((state) => state.students);
  //console.log("contacts", contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );
    const checkName = contacts.find((contact) => contact.name === name && name);
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number) && parseInt(number)
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
      id: contacts?.length > 0 ? contacts[contacts?.length - 1].id + 1 : 0,
      name,
      email,
      number,
    };
    dispatch(addStudent(data));
    toast.success("Student added successfully");
    setName("");
    setEmail("");
    setNumber("");
    navigate("/");
  };
  return (
    <div className="container">
      <h1 className="d-3 text-center my-5">Add Student</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={submitHandler}>
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
                value="Add Student"
                className="btn btn-block btn-dark mt-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
