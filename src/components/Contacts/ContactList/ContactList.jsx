import React from "react";
import { Link } from "react-router-dom";
const ContactList = () => {
  return (
    <>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">
                  Contact Manager
                  <Link to={"contacts/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2"></i>New
                  </Link>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, mollitia porro numquam perspiciatis facilis
                    corrupti natus reprehenderit recusandae asperiores fugit
                    sunt pariatur ut dicta. In voluptate corporis tenetur nulla
                    ullam.
                  </p>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/5087/5087607.png"
                        alt="img-2"
                        className="img-fluid contact-img"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name: <span className="fw-bold">priyank </span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Name: <span className="fw-bold">9090909090</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Name:{" "}
                          <span className="fw-bold">priyank1@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center ">
                      <Link
                        to={"/contacts/view/:contactId"}
                        className="btn btn-warning my-1"
                      >
                        <i className="fa fa-eye"></i>
                      </Link>
                      <Link
                        to={"/contacts/edit/:contactId"}
                        className="btn btn-primary my-1"
                      >
                        <i className="fa fa-pen"></i>
                      </Link>
                      <Link
                        to={"/contacts/view/:contactId"}
                        className="btn btn-danger my-1"
                      >
                        <i className="fa fa-trash"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactList;
