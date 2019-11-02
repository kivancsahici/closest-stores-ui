import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    streets: state.streets
  };
}

const Streets = connect(mapStateToProps)(function({
  streets,
  ...props /* assign any props I havent destructured on the left to a variable called props */
}) {
  return (
    <Form.Group as={Col} controlId="formGridState">
      <Form.Control as="select">
        {streets.map(post => (
          <option key={post.street} value={post.street}>
            {post.street}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
});

export default Streets;
