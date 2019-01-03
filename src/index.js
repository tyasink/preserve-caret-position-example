import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    //#region initialize state
    this.state = { name: "tyasin" };
    //#endregion

    //#region refs
    this.txtName = React.createRef();
    //#endregion
  }

  componentDidMount() {
    this.txtName.current.setSelectionRange(1, 3);
    //this.txtName.current.focus();
  }

  handleChange = e => {
    var caretPos = e.target.selectionStart;
    this.setState(
      {
        name: e.target.value.toUpperCase()
      },
      () => {
        // preserve caret position after changing inputs value
        this.txtName.current.setSelectionRange(caretPos, caretPos);
      }
    );
  };

  render() {
    return (
      <div className="App" style={{ margin: 40 }}>
        <input
          ref={this.txtName}
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div style={{ marginTop: 16, fontStyle: "italic" }}>
          Type some letters above, while caret is in the middle
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
