import React from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class Cities extends React.Component {
  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
        <Form.Group as={Col} controlId="formGridState">
        <Form.Control as="select"
        onChange={this.onChange.bind(this)}
        >
          {this.props.value
            .map(city =>
          <option key={city} value={city}>{city}</option>
          )}
        </Form.Control>
        </Form.Group>
    );
  }
}

export default Cities;
