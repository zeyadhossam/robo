import React, { Component } from "react";
import { CardList } from "../components/CardList";
import { SearchBox } from "../components/Search";
import { Scroll } from "../components/Scroll";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        return Response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;

    const filter = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1>loading</h1>;
    } else {
      if (filter.length > 0) {
        return (
          <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList robots={filter} />
            </Scroll>
          </div>
        );
      } else {
        return (
          <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <div className="existance">
              <h2> robot does not exist!</h2>
            </div>
          </div>
        );
      }
    }
  }
}
