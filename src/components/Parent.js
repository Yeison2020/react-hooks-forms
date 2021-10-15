import Form from "./Form";
import DisplayForm from "./DisplayForm";
import React, { useState } from "react";

function Parent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  return (
    <>
      <Form
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        firstName={firstName}
        lastName={lastName}
      />
      <DisplayForm firstName={firstName} lastName={lastName} />
    </>
  );
}

export default Parent;
