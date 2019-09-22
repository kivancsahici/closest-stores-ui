import React from "react";

import axios from 'axios';

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cities from './Cities';
import Streets from './Streets';

import "./App.css";

class App extends React.Component {
  handleClick(e) {
    axios.get(`http://localhost:8090/geoapi/v1/cities/`+e)
     .then(res => {
       const streets = res.data;
       this.setState({ streets });
     });
 }

  constructor(props) {
      super(props);
      this.state = {
        streets: [],
        cities: []
      };
    }

  renderStreets() {
    return (
      <Streets
        value={this.state.streets}
      />
    );
  }

  renderCities() {
    return (
      <Cities
        value={this.state.cities}
        onChange={(e) => this.handleClick(e)}
      />
    );
  }
  componentDidMount() {

    axios.get(`http://localhost:8090/geoapi/v1/cities`)
      .then(res => {
        const cities = res.data;
        setTimeout(() => this.setState({ cities }), 1000);

      });
  }

  render() {
    return (
      <div id="root-container">
      <Navbar bg="light" expand="lg"></Navbar>
      <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col md={12} lg={4}>
            <Row>
              <Col md={12} lg={5}>
                <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                  <Nav.Item>
                    <Nav.Link href="/home">Closest Jumbo</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Detailed Search</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={12} lg={7}>
                <Form>
                  {this.renderCities()}
                  {this.renderStreets()}
                  <Form.Group as={Col}>
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={4} className="mapHolder">{this.props.children}</Col>
          <Col md={12} lg={3} className="storeList">lg=3</Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
