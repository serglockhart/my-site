import React, { useState } from "react"
import { Link } from "gatsby"
import { Modal, ModalHeader } from "reactstrap"

const Contact = props => {
  const { linkTitle, linkClasses, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <>
      <Link onClick={toggle} className={linkClasses}>
        {linkTitle}
        {props.children}
      </Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <div className="modal-content">
          <ModalHeader toggle={toggle}>Contact Me</ModalHeader>
          <form
            id="contactForm"
            action="https://formspree.io/xyykdora"
            method="POST"
          >
            <div class="modal-body">
              <div id="message"></div>
              <div class="row">
                <div class="col-12 col-md-6">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    class="form-control"
                    placeholder="First"
                    required="true"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <input
                    type="text"
                    name="lastName"
                    class="form-control"
                    placeholder="Last"
                    required="true"
                  />
                </div>
              </div>
              <input
                type="email"
                name="_replyto"
                class="form-control"
                placeholder="example@gmail.com"
                required="true"
              />
              <input
                type="text"
                name="subject"
                class="form-control"
                placeholder="Subject..."
                required="true"
              />
              <textarea
                type="text"
                name="body"
                class="form-control"
                placeholder="Message..."
                required="true"
              ></textarea>
            </div>
            <div class="modal-footer">
              <input
                type="submit"
                class="btn btn-info"
                value="Send"
                id="contactFormButton"
              />
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
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
