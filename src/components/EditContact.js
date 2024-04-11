import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  { useState } from "react";
import  { useEffect } from "react";
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom";




const EditContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [picture, setPicture] = useState("");
  
  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if(currentContact) {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setNumber(currentContact.number);
        setPicture(currentContact.picture);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
        (contact)=> contact.id !== parseInt
        (id) && contact.email === email 
);
const checkNumber = contacts.find(
    (contact)=> contact.id !== parseInt
    (id) && contact.number === parseInt (number)
); 



    if (!email || !number || !name || !picture) {
        return toast.warning("Please fill in all fields!");
    }
    if (checkEmail){
        return toast.error("This email already Exists!");

    }
    if (checkNumber){
        return toast.error("This number already Exists!");

    }

    const data = {
        id: parseInt(id),
        name,
        email,
        number,
        picture,
    }
   dispatch ({type: "UPDATE_CONTACT", payload:data});
   toast.success (" Contact update successfully!!");
   history.push("/");
};





 
  return (
    <div className="container">
      {currentContact ? (
        <>
          <div className="row">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1 className="text-2xl font-medium font-bold text-black">
                Edit Student {id}
              </h1>
            </div>
            <div className="col-md-8 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}> 
                {/* Full Name */}
                <div className="form-group mb-4">
                  <label
                    htmlFor="fullName"
                    className="text-lg font-semibold text-gray-800"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    placeholder="Enter Full Name"
                    className="form-control long-input"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="form-group mb-4">
                  <label
                    htmlFor="email"
                    className="text-lg font-semibold text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email Address"
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                </div>

                {/* Phone Number */}
                <div className="form-group mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="text-lg font-semibold text-gray-800"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Enter Phone Number"
                    className="form-control"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                  />
                </div>

                {/* Picture */}
                <div className="form-group mb-4">
                  <label
                    htmlFor="picture"
                    className="text-lg font-semibold text-gray-800"
                  >
                    Picture
                  </label>
                  <input
                    type="text"
                    id="picture"
                    placeholder="Enter Picture URL"
                    className="form-control long-input"
                    value={picture}
                    onChange={e => setPicture(e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update Student"
                    className="btn btn-dark"
                  />
                  <Link to="/" className="btn btn-danger ml-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-2xl font-medium font-bold text-black">
          PersonsContact with id {id} does not exists
        </h1>
      )}
    </div>
  );
};

export default EditContact;
