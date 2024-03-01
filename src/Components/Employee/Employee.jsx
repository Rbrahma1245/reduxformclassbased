import  { Component } from 'react'
import { connect } from 'react-redux';

export class Employee extends Component {
  render() {
    let { user } = this.props;
    console.log(user);

    return (
      <div>Employee</div>
    )
  }
}


const mapStateToProps = (state) => {
  return state.login
};

export default connect(mapStateToProps)(Employee);


