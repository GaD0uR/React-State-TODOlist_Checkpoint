import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalExample = ({ todo, handledit }) => {
  const { buttonLabel, className } = todo;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [inputText, setInputText] = useState("");

  const edit = () => {
    handledit(todo.id, inputText);
    setModal(!modal);
  };

  return (
    <>
      <Button className="btn btn-info" onClick={toggle}>
        Edit
      </Button>
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
        className={className}
      >
        <ModalHeader toggle={toggle}>Edit TODO</ModalHeader>
        <input
          type="text"
          placeholder={todo.text}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <ModalFooter>
          <Button color="primary" onClick={edit}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalExample;
