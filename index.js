import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { ReactComponent as DownArrow } from "../../../assets/icons/DownArrow.svg";
import { CustomTableContainer } from "./styles";

const SortableColumn = ({ td }) => {
  const [toggle, setToggle] = useState(false);
  const isSort = td?.sortColumn ? true : false;
  const handleSort = () => {
    setToggle(!toggle);
    td?.sortColumn(td);
  };
  return (
    <TableCell
      align="left"
      className={isSort ? "table-head-cell sort-icon" : "table-head-cell"}
    >
      {td.label}{" "}
      {isSort && (
        <DownArrow onClick={handleSort} className={toggle ? "rotate" : ""} />
      )}
    </TableCell>
  );
};
const CustomTable = ({ tableData, apiData, primaryKey }) => {
  return (
    <CustomTableContainer>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableData.map((td) => {
                return <SortableColumn td={td} key={td.field} />;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {apiData.map((apiTd) => {
              return (
                <TableRow key={apiTd[primaryKey]}>
                  {tableData.map((td) => {
                    const res = td?.render
                      ? td.render(apiTd)
                      : apiTd?.[td.field] ?? "";
                    return (
                      <TableCell
                        key={td[primaryKey]}
                        align="left"
                        className="table-cell"
                      >
                        {res}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </CustomTableContainer>
  );
};
module.exports = CustomTable;
