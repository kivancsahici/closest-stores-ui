import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function StoreList() {
  return (
    <div className="storeList">
      <ListGroup as="ul">
        <ListGroup.Item as="li">
          <Row>
            <Col md={7} lg={7}>
              <div className="addressName">Jumbo Eindhoven Boschdijk</div>
            </Col>
            <Col md={4} lg={4}>
              <div className="bg-pup_supermarket"></div>
            </Col>
          </Row>
          <small>Currently open, closes at 22:00</small>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Row>
            <Col md={7} lg={7}>
              <div className="addressName">Jumbo Eindhoven Geldropseweg</div>
            </Col>
            <Col md={4} lg={4}>
              <div className="bg-pup_supermarket"></div>
            </Col>
          </Row>
          <small>Currently open, closes at 22:00</small>
        </ListGroup.Item>
      </ListGroup>    
    </div>
  );
}

export default StoreList;
