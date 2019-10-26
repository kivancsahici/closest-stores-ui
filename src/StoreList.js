import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import * as storeActions from "./redux/actions/storeActions";

function mapStateToProps(state) {
  return {
    stores: state.stores
  };
}

const mapDispatchToProps = {
  loadStores: storeActions.loadStores
};

const StoreList = connect(
  mapStateToProps,
  mapDispatchToProps
)(function({
  stores,
  loadStores,
  history,
  ...props /* assign any props I havent destructured on the left to a variable called props */
}) {
  useEffect(() => {
    loadStores().catch(error => {
      alert("Loading stores failed" + error);
    });
  }, []); //runs only once during initial load
  if (stores.length > 0) {
    return (
      <div className="storeList">
        <ListGroup as="ul">
          {stores.map((item, i) => (
            <ListGroup.Item as="li" key={item.id}>
              <Row>
                <Col md={7} lg={7}>
                  <div className="addressName">{item.addressName}</div>
                </Col>
                <Col md={4} lg={4}>
                  <div className="bg-pup_supermarket"></div>
                </Col>
              </Row>
              <small>Currently open, closes at 22:00</small>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  } else return <></>;
});

export default StoreList;
