import React, { useState } from "react"
import { Link } from "gatsby"
import { Modal, ModalHeader } from "reactstrap"

const Contact = props => {
  const { className } = props

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
          <form
            id="contactForm"
            action="https://formspree.io/xyykdora"
            method="POST"
          >
            <div class="modal-body">
              <div id="message"></div>
              <div class="row">
                <div class="col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    placeholder="Name"
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
