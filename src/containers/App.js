import React, { Component } from "react";
import { connect } from "react-redux";
import { CardList } from "../components/CardList";
import { SearchBox } from "../components/Search";
import { Scroll } from "../components/Scroll";
import ErrorBoundries from "../components/ErrorBoundries";
import "./App.css";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
  console.log("map state");
  return {
    searchfield: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    ispending: state.requestRobots.ispending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchfield, onSearchChange, robots, ispending } = this.props;
    const filter = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (ispending) {
      return <h1>loading</h1>;
    } else {
      if (filter.length > 0) {
        return (
          <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
              <ErrorBoundries>
                <CardList robots={filter} />
              </ErrorBoundries>
            </Scroll>
          </div>
        );
      } else {
        return (
          <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <div className="existance">
              <h2> robot does not exist!</h2>
            </div>
          </div>
        );
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
