import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Search from "./components/Search";
import { korisnik, repo, reset } from "./redux/actions";
import User from "./components/User";
import Repository from "./components/Repository";
import { Button, Container } from "react-bootstrap";

class App extends Component {
  render() {
    const { korisnik, repo } = this.props;

    return (
      <Container>
        <div className="App">
          <Search korisnik={korisnik} repo={repo} />
          <User user={this.props.user} />
          <Repository repos={this.props.repository} />
          <Button
            variant="secondary"
            onClick={this.props.reset}
            type="submit"
            size="lg"
            className="mt-10 reset-button"
          >
            Reset
          </Button>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    repository: state.repository,
  };
}

const mapDispatchToProps = {
  korisnik: korisnik,
  repo: repo,
  reset: reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
