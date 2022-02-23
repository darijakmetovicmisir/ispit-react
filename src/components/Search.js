import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default class Search extends Component {
  state = { value: "" };

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label className="text-left">GitHub username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. facebook"
            name="user"
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}
            value={this.state.value}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            this.props.korisnik(this.state.value);
            this.props.repo(this.state.value);
          }}
          className="mt-4 w-100"
        >
          Search
        </Button>
      </Form>
    );
  }
}
