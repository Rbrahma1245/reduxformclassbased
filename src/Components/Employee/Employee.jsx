/* eslint-disable react-refresh/only-export-components */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Component } from "react";
import { connect } from "react-redux";
import "./Employee.scss";
import { addUserDetails } from "../Reducer/LoginReducer";
import DisplayUserList from "./DisplayUserList";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

export class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        address: "",
      },
    };
  }

  countries = ["India", "Australia", "Mexico", "Canada", "Spain"];

  validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name required")
      .min(3, "First Name must be at least 3 characters"),
    middleName: Yup.string().required("Middle Name required"),
    lastName: Yup.string().required("Last Name required"),
    email: Yup.string().email("Invalid Email").required("Email required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid phone number")
      .required("Phone number is required"),
    country: Yup.string().required("Country required"),
    address: Yup.string()
      .required("Address is required")
      .min(5, "Address is too short")
      .max(100, "Address is too long"),
  });

  // componentDidUpdate(prevProps, prevState) {
  //   // Check if certain state has changed
  //   if (this.state.initialValue !== prevState.initialValue) {
  //     // Perform actions based on the state change
  //     console.log("someState has changed:", this.state.initialValue);

  //     // this.updateState(this.state.formValue);
  //   }

  //   // You can also perform actions without checking specific props or state
  //   console.log("Component has been updated");
  // }

  updateState = (newValues) => {
    this.setState({ initialValue: newValues });
  };

  render() {
    let { user } = this.props;

    // console.log(this.state.initialValue);

    return (
      <div>
        <h4>User Name: {user.userName}</h4>

        <Formik
          initialValues={this.state.initialValue}
          enableReinitialize
          validationSchema={this.validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            const uniqueId = uuidv4();

            this.props.addUserDetails({ values, uniqueId });
            // resetForm();
          }}
        >
          {(formikProps) => (
            <Form className="container">
              {console.log(formikProps, "test formik")}
              <div className="input-container">
                <label>First Name </label>
                <div style={{ display: "flex" }}>
                  <Field
                    type="text"
                    name="firstName"
                    // value={formikProps?.values?.initialValue?.firstName}
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
                    // value={formikProps?.values?.initialValue?.middleName}
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
                    // value={formikProps?.values?.initialValue?.lastName}
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
                    // value={formikProps?.values?.initialValue?.email}
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
                    // value={formikProps?.values?.initialValue?.phoneNumber}
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
                <div style={{ display: "flex" }}>
                  <Field
                    as="select"
                    name="country"
                    // value={formikProps?.values?.initialValue?.country}
                  >
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
                    component="span"
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
                    placeholder="Enter your Address..."
                    value={formikProps?.values?.initialValue?.address}
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage
                    name="address"
                    component="span"
                    className="error"
                  />
                </div>
              </div>

              <div>
                <button className="btn-submit" type="submit">
                  Submit
                </button>

                <button
                  className="btn-reset"
                  type="button"
                  onClick={() => {
                    formikProps.resetForm();
                  }}
                >
                  RESET
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <DisplayUserList setStateCallback={this.updateState} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.login;
};
const mapDispatchToProps = { addUserDetails };

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
