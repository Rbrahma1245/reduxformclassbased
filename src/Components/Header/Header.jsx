import { Component } from "react";
import "./Header.scss";
import { connect } from "react-redux";
import { isObjectEmpty } from "../../Utils/ObjectUtils";

class Header extends Component {
  render() {
    let { user } = this.props;

    return (
      <div className="header-container" style={{ display: "flex" }}>
        <div className="header-left">LOGO</div>

        <div className="header-right">
          {isObjectEmpty(user) ? "Login" : user.userName}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.login;
};

export default connect(mapStateToProps)(Header);
