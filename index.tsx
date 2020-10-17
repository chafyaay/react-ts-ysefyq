import React, { Component } from "react";
import { render } from "react-dom";
import { Card } from "./card.component/card.component";
import "./app.scss";
import Header  from "./component/header";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div className="main">
    <Header/>

    </div>;
  }
}

render(<App />, document.getElementById("root"));
