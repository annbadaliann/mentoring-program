import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { useState } from "react";

interface IColumn<T, K extends keyof T> {
  title: string;
  field: K;
}
interface IMcTableProps<T, K extends keyof T> {
  rows: T[];
  columns: IColumn<T, K>[];
}

const McTable = <T, K extends keyof T>({
  rows,
  columns,
}: IMcTableProps<T & { id: number }, K>) => {
  const [selectedList, setSelectedlist] = useState([]);

  const onSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelectedlist();
      return;
    }
    setSelectedlist([]);
  };

  const handleSelectRow = (e) => {};

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox checked onChange={onSelectAllClick} />
            </TableCell>
            {columns.map((item) => (
              <TableCell>{item.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell padding="checkbox">
                <Checkbox onChange={handleSelectRow} />
              </TableCell>
              {columns.map((col, index) => (
                // todo fix key
                <TableCell component="th" scope="row" key={index}>
                  {row[col.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default McTable;
