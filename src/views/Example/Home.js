import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import image from "../../assets/images/fort.jpg";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  //HOC: higher order component
  render() {
    console.log(this.props);
    return (
      <>
        <div>hello world from homepage with Hao</div>
        <div>
          <img src={image} />
        </div>
      </>
    );
  }
}

// export default withRouter(Home);
export default Color(Home);
