import React from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
  return (
    <section className="add-contact p-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 text-primary fw-bold">Edit Contact</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eius, voluptatum culpa nam maxime rem explicabo repellendus
              magnam. Dolor, molestiae!
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
            <form>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Photo Url"
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile"
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company"
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                />
              </div>
              <div className="mb-2">
                <select className="form-control">
                  <option value="">Select a Group</option>
                </select>
              </div>
              <div className="mb-2">
                <input
                  type="submit"
                  className="btn btn-primary  me-2"
                  value="Update"
                />
                <Link to={"/contacts/list"} className="btn btn-dark">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
              className="contact-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditContact;
