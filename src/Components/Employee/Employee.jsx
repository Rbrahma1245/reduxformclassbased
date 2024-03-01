import { ErrorMessage, Field, Form, Formik } from "formik";
import { Component } from "react";
import { connect } from "react-redux";
import "./Employee.scss";
import { addUserDetails } from "../Reducer/LoginReducer";
import DisplayUserList from "./DisplayUserList";
import { v4 as uuidv4 } from "uuid";

export class Employee extends Component {
  initialValue = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "", // Add country to your initial values
    address: "",
  };

  countries = ["India", "Australia", "Mexico", "Canada", "Spain"];

  render() {
    let { user } = this.props;

    return (
      <div>
        <h4>User Name: {user.userName}</h4>

        <Formik
          initialValues={this.initialValue}
          // validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            const uniqueId = uuidv4();

            this.props.addUserDetails({ values, uniqueId });
            // resetForm();
          }}
        >
          {(formikProps) => (
            <Form className="container">
              <div className="input-container">
                <label>First Name </label>
                <div>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="span"
                    className="error"
                  />
                </div>
              </div>

              <div className="input-container">
                <label>Middle Name</label>
                <div>
                  <Field
                    type="text"
                    name="middleName"
                    placeholder="Enter Middle Name"
                  />
                  <ErrorMessage
                    name="middleName"
                    component="span"
                    className="error"
                  />
                </div>
              </div>

              <div className="input-container">
                <label>Last Name</label>

                <div>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="span"
                    className="error"
                  />
                </div>
              </div>

              <div className="input-container">
                <label>Email : </label>
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error"
                  />
                </div>
              </div>
              <div className="input-container">
                <label>Phone Number</label>

                <div>
                  <Field
                    type="number"
                    name="phoneNumber"
                    placeholder="Enter your Phone number"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="span"
                    className="error"
                  />
                </div>
              </div>

              <div className="input-container">
                <label>Country</label>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Field as="select" name="country">
                    <option
                      value=""
                      label="Select an option"
                      className="error"
                    />
                    {this.countries.map((e, i) => {
                      return <option key={i}>{e}</option>;
                    })}
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="error"
                  />
                </div>
              </div>

              <div className="input-container">
                <label>Address</label>
                <div>
                  <Field
                    as="textarea"
                    name="address"
                    placeholder="Enter your Address"
                  />
                  <ErrorMessage
                    name="address"
                    component="span"
                    className="error"
                  />
                </div>
              </div>

              <button type="submit">Submit</button>

              <DisplayUserList />
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.login;
};
const mapDispatchToProps = { addUserDetails };

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
