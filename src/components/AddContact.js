import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom";

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [picture, setPicture] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch ();
    const history = useHistory ();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(
            (contact)=> contact.email === email && contact
    );
    const checkNumber = contacts.find(
        (contact)=> contact.number === parseInt (number)
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
            id: contacts[contacts.length -1].id + 1,
            name,
            email,
            number,
            picture,
        }
       dispatch ({type: "ADD_CONTACT", payload:data});
       toast.success (" Contact added successfully!!");
       history.push("/");
    };

    
  
    return (
        <div className="container">
            <div className="row">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="text-2xl font-medium font-bold text-black">
                        Add Contact
                    </h1>
                </div>
                <div className="col-md-8 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="form-group mb-4">
                            <label htmlFor="name" className="text-lg font-semibold text-gray-800">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter Full Name"
                                className="form-control long-input"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        {/* Email */}
                        <div className="form-group mb-4">
                            <label htmlFor="email" className="text-lg font-semibold text-gray-800">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter Email Address"
                                className="form-control"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="form-group mb-4">
                            <label htmlFor="number" className="text-lg font-semibold text-gray-800">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="number"
                                placeholder="Enter Phone Number"
                                className="form-control"
                                value={number}
                                onChange={e => setNumber(e.target.value)}
                            />
                        </div>

                        {/* Picture */}
                        <div className="form-group mb-4">
                            <label htmlFor="picture" className="text-lg font-semibold text-gray-800">
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
                            <button type="submit" className="btn btn-block btn-dark">
                                Create Contact
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContact;
