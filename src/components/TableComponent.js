import React, { useContext } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { GlobalContext } from "../context/GlobalState";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;

const TableComponent = () => {
  const { users, removeUser } = useContext(GlobalContext);
  const columns = [
    {
      dataField: "date",
      text: "Borrows Date",
      sort: true,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "title",
      text: "Title",
      sort: true,
    },
    {
      dataField: "author",
      text: "Author",
      sort: true,
    },
    {
      dataField: "contact",
      text: "Contact",
    },
    {
      dataField: "link",
      text: "Action",
      headerAlign: "center",
      headerStyle: () => {
        return { width: "15%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"edit/" + row.id}>
              <Button variant="success" className="mr-2">
                Edit
              </Button>
            </Link>

            <Button
              variant="danger"
              className="mr-2"
              onClick={() => removeUser(row.id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  const defaultSorted = [
    {
      dataField: "name",
      order: "asc",
    },
  ];
  return (
    <ToolkitProvider
      keyField="id"
      data={users}
      columns={columns}
      defaultSorted={defaultSorted}
      search
    >
      {(props) => (
        <div>
          <SearchBar {...props.searchProps} />
          <hr />
          <h6 className="mb-3">Click table head to sort!</h6>
          <BootstrapTable
            {...props.baseProps}
            pagination={paginationFactory()}
          />
        </div>
      )}
    </ToolkitProvider>
  );
};

export default TableComponent;
