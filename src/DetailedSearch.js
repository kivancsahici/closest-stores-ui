import React from "react";
import Cities from "./Cities";
import Streets from "./Streets";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class DetailedSearch extends React.Component {
  handleClick(e) {
    axios.get(`http://localhost:3001/acmeStores?city=` + e).then(res => {
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
    return <Streets value={this.state.streets} />;
  }

  renderCities() {
    return (
      <Cities value={this.state.cities} onChange={e => this.handleClick(e)} />
    );
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/acmeCities`).then(res => {
      const cities = res.data;
      setTimeout(() => this.setState({ cities }), 1);
    });
  }

  render() {
    return (
      <div className="DetailedSearch">
        <Form>
          {this.renderCities()}
          {this.renderStreets()}
          <Form.Group as={Col}>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default DetailedSearch;
