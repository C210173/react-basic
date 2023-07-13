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

  handleDeleteUser = (user) => {
    console.log("check delete user", user);
    this.props.deleteUserRedux(user);
  };
  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    console.log("check props", this.props.dataRedux);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>hello world from homepage with Hao</div>
        <div>
          <img src={image} />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} {item.name} &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add new</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "ADD_USER" }),
  };
};

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
