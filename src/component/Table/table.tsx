import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";

import "./styles.scss";

function getFullName(params: GridValueGetterParams) {
  return `${params.getValue(params.id, "firstName") || ""} ${
    params.getValue(params.id, "lastName") || ""
  }`;
}

const columns: GridColDef[] = [
  {
    field: "firstName",
    headerName: "First name",
    flex: 1,
    headerClassName: "header-column",
  },
  {
    field: "lastName",
    headerName: "Last name",
    headerClassName: "header-column",
    flex: 1,
  },
  {
    field: "fullName",
    headerName: "Full name",
    headerClassName: "header-column",
    flex: 1,
    valueGetter: getFullName,
    sortComparator: (v1, v2) => v1!.toString().localeCompare(v2!.toString()),
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon" },
  { id: 2, lastName: "Lannister", firstName: "Cersei" },
  { id: 3, lastName: "Lannister", firstName: "Jaime" },
  { id: 4, lastName: "Stark", firstName: "Arya" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
];

export default function ValueGetterGrid() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
