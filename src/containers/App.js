import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "./../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";
// import { searchRobots } from "./../reducers";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    errors: state.requestRobots.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (event) => dispatch(setSearchField(event.target.value)),
    handleRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.handleRequestRobots();
  }

  render() {
    const { searchField, handleSearch, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div>
        <h1 className="tc"> Home of Robos</h1>
        <SearchBox onSearch={handleSearch} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
