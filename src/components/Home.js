import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!");
  };

  return (
    <div className="container mx-auto mt-20 ">
      <div className="grid grid-cols-1 gap-8 justify-center">
        {contacts.map((contact, id) => (
          <div
            key={id}
            className="bg-gray-300 rounded-lg p-4 shadow-md flex justify-between items-center"
            style={{ maxWidth: "800px" }}
          >
            <div>
              <h2 className="text-xl font-semibold">{contact.name}</h2>
              <p className="text-gray-700">{contact.email}</p>
              <p className="text-gray-700">{contact.number}</p>
            </div>
            <div>
              <Link
                to={`/edit/${contact.id}`}
                className="btn btn-small btn-primary mr-2"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => deleteContact(contact.id)}
                className="btn btn-small btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/add" className="btn btn-outline-dark fixed top-16 right-8">
        Add New
      </Link>
    </div>
  );
};

export default Home;
