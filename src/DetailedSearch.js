import React, { useEffect } from "react";
import Cities from "./Cities";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import * as storeActions from "./redux/actions/storeActions";

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

const mapDispatchToProps = {
  loadCities: storeActions.loadCities
};

const DetailedSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(function({
  loadCities,
  cities,
  ...props /* assign any props I havent destructured on the left to a variable called props */
}) {
  useEffect(() => {
    loadCities().catch(error => {
      alert("Loading cities failed" + error);
    });
  }, []); //runs only once during initial load

  return (
    <div className="DetailedSearch">
      <Form>
        <Cities />
        <Form.Group as={Col}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
});

export default DetailedSearch;
