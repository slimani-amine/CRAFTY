import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {rows} from "./data"
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Header from "../../components/Header";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import UpdateIcon from "@mui/icons-material/Update";
const Team = () => {
  const theme = useTheme();
  const deleteOne = (rowToDelete) => {
    console.log(rowToDelete);
    // Find the index of the row to delete
    const rowIndex = rows.findIndex((row) => row.id === rowToDelete.id);

    if (rowIndex !== -1) {
      // Create a new array without the deleted row
      const updatedRows = [
        ...rows.slice(0, rowIndex),
        ...rows.slice(rowIndex + 1),
      ];

      // Update the rows variable with the new data
      rows = updatedRows;
    }
  };

  // field ==> Reqird
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? "#262401 "
                  : access === "Crafter"
                  ? "#8c633f"
                  : "#707324",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsIcon sx={{ color: "#fff" }} fontSize="small" />
            )}

            {access === "Crafter" && (
              <ShoppingBagIcon sx={{ color: "#fff" }} fontSize="small" />
            )}

            {access === "User" && (
              <GroupIcon sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "",
      headerName: "Management",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        return (
          <>
            <Box
              sx={{
                p: "5px",
                width: "99px",
                borderRadius: "3px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
                cursor: "pointer",
                backgroundColor: "#5E765E",
                mr: 5,
              }}
              onClick={() => {
                deleteOne(row);
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                <UpdateIcon
                  sx={{
                    marginBottom: "-6px",
                  }}
                />
                Update
              </Typography>
            </Box>
            <Box
              sx={{
                p: "5px",
                width: "99px",
                borderRadius: "3px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
                cursor: "pointer",
                backgroundColor: "#8C3A3A",
              }}
              onClick={() => {
                deleteOne(row);
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                <DeleteOutlineTwoToneIcon
                  sx={{
                    marginBottom: "-6px",
                  }}
                />
                Delete
              </Typography>
            </Box>
          </>
        );
      },
    },
  ];
  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Team;
