import {
  Card,
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

interface CustomTableProp {
  header?: string[];
  footer?: string;
  children?: any;
}

export default function CustomTable({
  header = [],
  footer,
  children,
}: CustomTableProp) {
  return (
    <Card>
      <Table aria-label="customized table">
        <TableHeader>
          <TableRow>
            {header.map((headerItem) => (
              <TableColumn key={headerItem} align="center">
                {headerItem}
              </TableColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{children}</TableBody>
      </Table>
      {footer && (
        <div className="flex items-end justify-center px-2 text-sm">
          {footer}
        </div>
      )}
    </Card>
  );
}
