import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
  // [`&.${tableCellClasses.head}`]: {
  //   backgroundColor: theme.palette.common.black,
  //   color: theme.palette.common.white,
  // },
  minWidth: "100px",
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const CustomTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.75rem",
  padding: "0.5rem",
  fontWeight: "500" as any,
}));

interface CustomTableProp {
  header?: string[];
  footer?: string;
  children?: React.ReactNode;
}

export default function CustomTable({
  header = [],
  footer,
  children,
}: CustomTableProp) {
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      style={{ margin: "0.1rem" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {header.map((headerItem) => (
              <CustomTableCell key={headerItem} align="center">
                {headerItem}
              </CustomTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
      {footer && <StyledTypography>{footer}</StyledTypography>}
    </TableContainer>
  );
}
