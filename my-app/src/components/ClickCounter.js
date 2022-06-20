import React from "react";

//this.props.increment

export class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      fetchData1: {
        value: "value",
        data: ["some text", "text"],
      },
      fetchData2: [1, 2, 3],
    };
  }

  counter = (data) => (e) => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState(function (state, props) {
      return { count: state.count + parseInt(props.increment) };
    });
    this.setState((state, props) => ({
      fetchData2: [7, 8, 9],
    }));
    this.setState((state, props) => ({ fetchData1: props.newFetchData1 }));
    this.setState((state, props) => ({
      fetchData1: {
        value: this.state.fetchData1.value,
        data: [4, 5, 6], // если хотим изменить только один параметр - data,
      },
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.counter()}>Count your clicks</button>
      </div>
    );
  }
}
