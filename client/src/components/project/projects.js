import React, { Component } from "react";
import axios from "axios";
import Showcase from "./showcase";

class projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devs: [],
    };
  }

  componentDidMount() {
    this.fetchAllDevs();
  }

  fetchAllDevs = () => {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    axios
      .get(`${apiBaseUrl}/api/dev`) // No type param = get all
      .then((response) => {
        this.setState({ devs: response.data });
      })
      .catch((error) => {
        console.error("Error fetching devs:", error);
      });
  };

  render() {
    const { devs } = this.state;

    return (
      <div className="project">
        <h1>All Projects</h1>
        <Showcase devs={devs} />
      </div>
    );
  }
}

export default projects;