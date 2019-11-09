import React, { useEffect } from "react";
import Cities from "./Cities";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Streets from "./Streets";
import Spinner from "./common/Spinner";
import { connect } from "react-redux";
import * as storeActions from "../redux/actions/storeActions";

function mapStateToProps(state) {
  return {
    cities: state.cities,
    apiCallActive: state.apiCallActive
  };
}

const mapDispatchToProps = {
  loadCities: storeActions.loadCities,
  loadStores: storeActions.loadStores
};

const DetailedSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(function({
  apiCallActive,
  loadCities,
  loadStores,
  cities,
  ...props /* assign any props I havent destructured on the left to a variable called props */
}) {
  useEffect(() => {
    /*
    loadCities().catch(error => {
      alert("Loading cities failed" + error);
    });*/
    if (cities.length === 0) loadCities();
  }, []); //runs only once during initial load

  function onSave(event) {
    event.preventDefault();
    loadStores();
  }

  return (
    <>
      {apiCallActive ? (
        <Spinner />
      ) : (
        <div className="DetailedSearch">
          <Form onSubmit={onSave}>
            <Cities />
            <Streets />
            <Form.Group as={Col}>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </>
  );
});

export default DetailedSearch;
