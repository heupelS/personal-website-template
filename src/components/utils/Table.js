import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";

function MyTable({ projectData }) {
  const isNarrowScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      sx={{
        background: "inherit",
        boxShadow: "none",
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Table>
        <TableBody>
          {isNarrowScreen ? (
            <>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Category</Typography>
                </TableCell>
                <TableCell>{projectData.category}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Year</Typography>
                </TableCell>
                <TableCell>{projectData.year}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Timeline</Typography>
                </TableCell>
                <TableCell>{projectData.timeline}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Challenge</Typography>
                </TableCell>
                <TableCell colSpan={2}>{projectData.challenge}</TableCell>
              </TableRow>
            </>
          ) : (
            <>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Category</Typography>
                </TableCell>
                <TableCell>{projectData.category}</TableCell>
                <TableCell rowSpan={3} style={{ verticalAlign: "top" }}>
                  <Typography variant="h6">Challenge</Typography>
                  {projectData.challenge}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Year</Typography>
                </TableCell>
                <TableCell>{projectData.year}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Timeline</Typography>
                </TableCell>
                <TableCell>{projectData.timeline}</TableCell>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
    </Box>
  );
}

export default MyTable;
