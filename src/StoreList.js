import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const stores = [
  {
    addressName: 'Jumbo Eindhoven Boschdijk',
    locationType: 'PuP'
  },
  {
    addressName: 'Jumbo Eindhoven Geldropseweg',
    locationType: 'PuP'
  },
  {
    addressName: 'Jumbo Eindhoven Kastelenplein',
    locationType: 'PuP'
  }
];

function StoreList() {
  return (
    <div className="storeList">
      <ListGroup as="ul">
      {stores.map((item,i) => (
        <ListGroup.Item as="li">
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
  )
}

export default StoreList;
