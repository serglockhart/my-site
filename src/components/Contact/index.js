import React, { useState } from "react"
import { Link } from "gatsby"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import "./index.css"

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
        <ModalHeader toggle={toggle}>Contact Me</ModalHeader>
        <form action="https://formspree.io/xyykdora" method="POST">
          <ModalBody>
            <div className="row">
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control"
                  placeholder="First"
                  required="true"
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last"
                  required="true"
                />
              </div>
            </div>
            <input
              type="email"
              name="_replyto"
              className="form-control"
              placeholder="example@gmail.com"
              required="true"
            />
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject..."
              required="true"
            />
            <textarea
              type="text"
              name="body"
              className="form-control"
              placeholder="Message..."
              required="true"
            ></textarea>
          </ModalBody>
          <ModalFooter>
            <input type="submit" className="btn btn-info" value="Send" />
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
