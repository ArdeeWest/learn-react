import React from "react";

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      taste: "lime",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTaste = this.handleChangeTaste.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("name is:" + this.state.value);
  }

  handleChangeTaste(event) {
    this.setState({ taste: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <div>
            <label>
              Choose the taste of ice-cream
              <select
                value={this.state.taste}
                onChange={this.handleChangeTaste}
              >
                <option value="strawberry">Strawberry</option>
                <option value="coconut">Coconut</option>
                <option value="lime">Lime</option>
                <option value="chocolate">Chocolate</option>
              </select>
            </label>
          </div>
        </label>
        <input type="submit" value="send" />
      </form>
    );
  }
}
