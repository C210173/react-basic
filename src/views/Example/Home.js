import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import image from "../../assets/images/fort.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  //HOC: higher order component
  render() {
    console.log("check props", this.props.dataRedux);
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

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

// export default withRouter(Home);
export default connect(mapStateToProps)(Color(Home));
