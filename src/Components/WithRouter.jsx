import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/display-name
const withRouter = (WrappedComponent) => (props) => {
  const navigate = useNavigate();

  return <WrappedComponent {...props} navigate={navigate} />;
};

export default withRouter;
