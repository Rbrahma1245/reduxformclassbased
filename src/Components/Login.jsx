import { ErrorMessage, Field, Form, Formik } from "formik";
import { Component } from "react";
import * as Yup from "yup";
import "./Login.scss";
import { connect } from "react-redux";
import { addUser } from "./Reducer/LoginReducer";
import withRouter from "./WithRouter";

class Login extends Component {
 
  render() {
    const validationSchema = Yup.object().shape({
      userName: Yup.string().required("User name is required"),
      password: Yup.string()
        .required("Password required")
        .min(8, "Password must be at least 8 characters"),
      // .matches(
      //   /(?=.*[a-z])(?=.*[A-Z])\w+/,
      //   "Password should contain at least one uppercase and lowercase character"
      // )
      // .matches(/\d/, "Password should contain at least one number")
      // .matches(
      //   /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      //   "Password should contain at least one special character"
      // ),
    });

    return (
      <div style={{ height: "100vh" }} className="login-container">
        <h3>LOGIN FORM</h3>
        <Formik
          initialValues={{ userName: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            let id = new Date().getMilliseconds()
            this.props.addUser({values, id});
            this.props.navigate("/employee");
          }}
        >
          <Form className="login-form">
            <div>
              <Field
                type="text"
                name="userName"
                placeholder="Enter User Name"
              />
              <ErrorMessage name="userName" className="error" component="div" />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <ErrorMessage name="password" className="error" component="div" />
            </div>

            <button type="submit">LOGIN</button>
          </Form>
        </Formik>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
};
const mapDispatchToProps = { addUser };

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export default withRouter(ConnectedLogin);
