import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import * as storeActions from "./redux/actions/storeActions";

function mapStateToProps(state) {
  return {
    cities: state.cities,
    streets: state.streets
  };
}

const mapDispatchToProps = {
  loadStreets: storeActions.loadStreets
};

const Cities = connect(
  mapStateToProps,
  mapDispatchToProps
)(function({
  loadStreets,
  cities,
  streets,
  ...props /* assign any props I havent destructured on the left to a variable called props */
}) {
  return (
    <Form.Group as={Col} controlId="formGridState">
      <Form.Control
        as="select"
        onChange={e => loadStreets(e.target.value)}
        defaultValue={"selectOption"}
      >
        <option value="selectOption">Select a city</option>
        {cities.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
});

export default Cities;
