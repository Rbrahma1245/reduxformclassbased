import { Component } from "react";
import { isObjectEmpty } from "../../Utils/ObjectUtils";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { connect } from "react-redux";
import { deleteUserDetails } from "../Reducer/LoginReducer";

class DisplayUserList extends Component {
  columns = [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Middle Name",
      accessor: "middleName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone number",
      accessor: "phoneNumber",
    },
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <button onClick={() => this.handleDeleteClick(row)}>Delete</button>
      ),
    },
  ];

  handleRowClick = (row) => {
    console.log(row.original);
  };

  handleDeleteClick = (row) => {
    this.props.deleteUserDetails(row._original);
  };

  render() {
    let { userDetails } = this.props;

    console.log(userDetails, "all details");
    return (
      <div style={{ height: "50vh", textAlign: "center", marginTop: 50 }}>
        {isObjectEmpty(userDetails) ? (
          "No data Found..."
        ) : (
          <ReactTable
            data={userDetails}
            columns={this.columns}
            defaultPageSize={10}
            minRows={3}
            getTrProps={(state, rowInfo) => ({
              onClick: () => this.handleRowClick(rowInfo),
            })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.login;
};
const mapDispatchToProps = { deleteUserDetails };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayUserList);