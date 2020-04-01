import React, { useState } from "react"
import { Link } from "gatsby"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { createGlobalStyle } from "styled-components"

const ContactWrapper = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap");
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css");

  .modal {
    font-family: "Open Sans", Roboto, sans-serif;
  }

  .modal-title {
    font-weight: 600;
    color: #383838;
  }

  .form-control {
    border: 0.125rem solid rgba(0, 0, 0, 0.1);
    border-width: 0.125rem;
    font-family: "Open Sans", Roboto, sans-serif;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.75rem;
  }

  .form-control:hover {
    border: 0.125rem solid rgba(0, 0, 0, 0.2);
  }

  .form-control:active {
    border: 0.125rem solid #e18e7f;
  }

  .form-control:focus {
    border: 0.125rem solid #e18e7f;
  }

  textarea.form-control {
    margin-bottom: 0;
  }

  .btn {
    border-radius: 0.2rem;
    -webkit-box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }

  .btn:hover {
    -webkit-box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  }

  .btn.btn-info {
    background: #e18e7f;
    border: 0.0625rem solid rgba(0, 0, 0, 0.1);
    color: #ffffff !important;
  }

  .btn.btn-info:active {
    background: #b55f4b;
  }

  .btn.btn-info:focus {
    background: #b55f4b;
  }

  .btn.btn-info:hover {
    background: #b55f4b;
  }
`

const Contact = props => {
  const { linkTitle, linkClasses, className } = props
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <>
      <ContactWrapper />
      <Link onClick={toggle} className={linkClasses}>
        {linkTitle}
        {props.children}
      </Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Contact Me</ModalHeader>
        <form
          action="https://getform.io/f/c0fa5731-f460-4790-b014-66330b003eeb"
          method="POST"
        >
          <ModalBody>
            <div className="container-fluid px-0">
              <div className="row">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    placeholder="First"
                    minlength="2"
                    required="true"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last"
                    minlength="2"
                    required="true"
                  />
                </div>
              </div>
            </div>
            <input
              type="email"
              name="_replyto"
              className="form-control"
              placeholder="Email"
              minlength="2"
              required="true"
            />
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              minlength="2"
              required="true"
            />
            <textarea
              type="text"
              name="body"
              className="form-control"
              placeholder="Message"
              minlength="2"
              required="true"
            ></textarea>
          </ModalBody>
          <ModalFooter>
            <input type="submit" className="btn btn-info" value="Submit" />
            <Button type="button" color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  )
}

export default Contact
