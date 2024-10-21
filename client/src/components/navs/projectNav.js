import React, { Component } from "react";
import axios from "axios"; // Make sure axios is imported
import Showcase from "../projectInfos/showcase";

class ProjectNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubComponent: "webDev", // Handles internal component switching
      devs: [], // Store fetched data here
    };
  }

  componentDidMount() {
    // Fetch initial data for the default selectedSubComponent
    this.fetchDevData(this.state.selectedSubComponent);
  }

  fetchDevData = (type) => {
    // Make the API call to fetch the data from your server
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    axios
      .get(`${apiBaseUrl}/api/dev?type=${type}`)
      .then((response) => {
        const devs = response.data;
        this.setState({
          devs: devs,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setSelectedSubComponent = (component) => {
    this.setState({ selectedSubComponent: component }, () => {
      this.fetchDevData(component);
    });
  };

  renderSubComponent() {
    const { devs } = this.state;

    return <Showcase devs={devs} />;
  }

  render() {
    return (
      <div className="header">
        <div className="navContainer">
          <button
            className="navButton"
            onClick={() => this.setSelectedSubComponent("webDev")}
          >
            Web Development
          </button>
          <button
            className="navButton"
            onClick={() => this.setSelectedSubComponent("appDev")}
          >
            App Development
          </button>
          <button
            className="navButton"
            onClick={() => this.setSelectedSubComponent("otherDev")}
          >
            Other Development
          </button>
          <hr />
        </div>
        {/* Render the selected sub-component */}
        <div>{this.renderSubComponent()}</div>
      </div>
    );
  }
}

export default ProjectNav;