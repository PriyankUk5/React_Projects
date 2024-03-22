import React from "react";
import { Link } from "react-router-dom";

const ViewContact = () => {
  return (
    <>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                aut perferendis ab distinctio repellendus temporibus laboriosam
                repellat officiis enim eveniet!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="view-contact-intro mt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt=""
                className="contact-img"
              />
            </div>
            <div className="col-md-8">
              {" "}
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name: <span className="fw-bold">priyank </span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Mobile: <span className="fw-bold">9090909090</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Email: <span className="fw-bold">priyank1@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Company: <span className="fw-bold">priyank1@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Title: <span className="fw-bold">priyank1@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Group: <span className="fw-bold">priyank1@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={"/contacts/list"} className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewContact;
