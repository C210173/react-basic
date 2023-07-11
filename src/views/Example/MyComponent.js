import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  //key:value
  state = {
    arrJobs: [
      { id: "abc123", title: "develop", salary: "500" },
      { id: "abc1234", title: "test", salary: "400" },
      { id: "abc1235", title: "project manager", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  /*
    JSX => return block
    */

  //re render
  render() {
    console.log(">>>> call render: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponent;
