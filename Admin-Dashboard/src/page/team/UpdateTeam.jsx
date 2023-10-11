import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { toast } from "react-toastify";
import axios from "axios";
import { Tostify } from "../Tostify/ToastyFy";
import { useLocation, useNavigate } from "react-router-dom";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const data = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "crafter",
    label: "Crafter",
  },
  {
    value: "user",
    label: "User",
  },
];

const UpdateTeam = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { rowData } = location.state || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);

  const [firstName, setfirstName] = useState(rowData.name);
  const [lastName, setlastName] = useState(rowData.lastName);
  const [BusinessName, setBusinessName] = useState(rowData.buisnessName);
  const [email, setemail] = useState(rowData.email);
  const [role, setrole] = useState(rowData.role);
  const [Birthday, setBirthday] = React.useState(dayjs(rowData.birthday));
  const handleClick = () => {
    setOpen(true);
    setfirstName("");
    setlastName("");
    setBusinessName("");
    setemail("");
  };
  const onSubmit = async () => {
    var obj = {
      firstName,
      lastName,
      BusinessName,
      email,
      Birthday: Birthday["$d"].toString(),
      role,
    };
    console.log(obj, "now");
    axios
      .put(`http://localhost:4000/user/updateuser/${rowData.id}`, obj)
      .then(() => {
        toast.success("information has been updated successfully.");
        handleClick();
        setTimeout(() => {
          navigate("/team");
        }, 1100);
      })
      .catch(() => {
        toast.error("An error occurred. Please try again.");
      });
  };

  return (
    <Box>
      <Header
        title="Update Profile"
        subTitle="Here you can update profile (Admin - Crafter - User)"
      />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="on"
      >
        <Tostify />

        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName)
                ? "This field is required & min 3 character"
                : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name *"
            variant="filled"
            value={firstName}
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
          />

          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "This field is required & min 3 character"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name *"
            variant="filled"
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          />
        </Stack>
        <TextField
          error={Boolean(errors.BusinessName)}
          helperText={
            Boolean(errors.BusinessName)
              ? "This field is required & min 3 character & unique "
              : null
          }
          label="BusinessName *"
          variant="filled"
          {...register("firstName", { required: true, minLength: 3 })}
          value={BusinessName}
          onChange={(e) => {
            setBusinessName(e.target.value);
          }}
        />

        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email)
              ? "Please provide a valid email address"
              : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email *"
          variant="filled"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateField"]}>
            <DateField
              label="Birthday"
              value={Birthday}
              onChange={(newValue) => setBirthday(newValue)}
              sx={{ flex: 1 }}
              variant="filled"
            />
          </DemoContainer>
        </LocalizationProvider>

        <TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role *"
          defaultValue="User"
          value={role}
          onChange={(e) => {
            setrole(e.target.value);
          }}
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize", backgroundColor: "#8c633f" }}
            variant="contained"
          >
            Update
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateTeam;
