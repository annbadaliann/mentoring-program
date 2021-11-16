import { useEffect, useState } from "react";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { useDispatch } from "react-redux";
import { setSelectedMentors } from "../../store/slicers/mentors";

interface IColumn {
  title: string;
  field: string;
}

interface IRow {
  id: string;
  isSelected?: boolean;
}
interface IMcTableProps {
  rows: IRow[];
  columns: IColumn[];
  disableCheckbox?: boolean;
  isSelectable?: boolean;
}

const McTable = ({
  rows,
  columns,
  disableCheckbox = false,
  isSelectable = false,
}: IMcTableProps) => {
  const [selectableRows, setSelectableRows] = useState<IRow[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rows?.length) {
      setSelectableRows(rows);
      const selectedRows = rows.filter((item: IRow) => item.isSelected);
      dispatch(setSelectedMentors(selectedRows));
    }
  }, [dispatch, rows]);

  const handleSelectRow = (id: string) => {
    const rows = [...selectableRows];
    const row = selectableRows.find((item) => item.id === id);
    const newRows = rows.map((item) => {
      return {
        ...item,
        isSelected: item.id === row.id ? !item.isSelected : item.isSelected,
      };
    });

    setSelectableRows(newRows);

    const selectedRows = newRows.filter((item) => item.isSelected);
    dispatch(setSelectedMentors(selectedRows));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            {columns.map((item) => (
              <TableCell>{item.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {selectableRows.map((row) => (
            <TableRow key={row.id} selected={isSelectable && row.isSelected}>
              {isSelectable && (
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={row.isSelected}
                    onChange={() => handleSelectRow(row.id)}
                    disabled={disableCheckbox}
                  />
                </TableCell>
              )}
              {columns.map((col) => (
                <TableCell component="th" scope="row" key={col.field}>
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
