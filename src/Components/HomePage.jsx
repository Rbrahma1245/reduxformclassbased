import { Component } from "react";
import Login from "./Login";

export class HomePage extends Component {
  render() {
    return (
      <div style={{ height: "90vh" }}>
        <Login />
      </div>
    );
  }
}

export default HomePage;
