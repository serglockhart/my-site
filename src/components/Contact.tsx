import React, { useState } from "react"
import { Link } from "gatsby"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const Contact = (props: { children: any }) => {
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
                    minLength="2"
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last"
                    minLength="2"
                    required
                  />
                </div>
              </div>
            </div>
            <input
              type="email"
              name="_replyto"
              className="form-control"
              placeholder="Email"
              minLength="2"
              required
            />
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              minLength="2"
              required
            />
            <textarea
              type="text"
              name="body"
              className="form-control"
              placeholder="Message"
              minLength="2"
              required
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
