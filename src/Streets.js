import React from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Streets(props) {
  return (
    <Form.Group as={Col} controlId="formGridState">
      <Form.Control as="select">
        {
          props.value.map(
            post =>
            <option key={post.street} value={post.street}>{post.street}</option>
          )
        }
      </Form.Control>
    </Form.Group>
  );
}

export default Streets;
