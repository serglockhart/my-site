import React, { useState } from "react"
import { Link } from "gatsby"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const Contact = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <>
      <Link onClick={toggle} className="btn btn-info">
        Contact me
      </Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <div className="modal-content">
          <ModalHeader toggle={toggle}>Contact Me</ModalHeader>
          <form id="contactForm" method="POST" data-netlify="true">
            <div className="modal-body">
              {/* Render a div for error and success messages */}
              <div id="message"></div>
              {/* Render the form fields */}
              <div className="row">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    placeholder="First"
                    required="true"
                  ></input>
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last"
                    required="true"
                  ></input>
                </div>
              </div>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="example@gmail.com"
                required="true"
              ></input>
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject..."
                required="true"
              ></input>
              <textarea
                type="text"
                name="body"
                className="form-control"
                placeholder="Message..."
                required="true"
              ></textarea>
            </div>
            <div className="modal-footer">
              <input
                type="submit"
                class="btn btn-info"
                value="Send"
                id="contactFormButton"
              />
              <button
                type="button"
                onClick={toggle}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default Contact
