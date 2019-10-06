import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ClosestJumbo from './ClosestJumbo';
import DetailedSearch from './DetailedSearch';
import StoreList from './StoreList';
import { Link, Switch, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div id="root-container">
    <Navbar bg="light" expand="lg"></Navbar>
    <Container fluid="true">
      <Row className="justify-content-md-center">
        <Col md={12} lg={2}>
          <Button variant="primary" block><Link to="/closestJumbo">Closest Jumbo</Link></Button>
          <Button variant="primary" block><Link to="/detailedSearch">Detailed Search</Link></Button>
        </Col>
        <Col md={12} lg={4} className="mapHolder">
          <Switch>
            <Route exact path="/closestJumbo" component={ClosestJumbo} />
            <Route exact path="/detailedSearch/" component={DetailedSearch} />
          </Switch>
        </Col>
        <Col md={12} lg={3} className="storeList">
          <StoreList/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
