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

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Crafter",
    label: "Crafter",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [BusinessName, setBusinessName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("User");
  const [Birthday, setBirthday] = React.useState(dayjs("2022-04-17"));
  const handleClick = () => {
    setOpen(true);
    setfirstName("");
    setlastName("");
    setBusinessName("");
    setemail("");
    setpassword("");
    setfirstName("");
  };
  const onSubmit = () => {
    var obj = {
      firstName,
      lastName,
      BusinessName,
      email,
      password,
      Birthday: Birthday["$d"].toString(),
      role,
    };
    //here add the query of add someone + verification :
    axios
      .post("http://localhost:4000/user/adduser", obj)
      .then(() => {
        toast.success("Added");
      })
      .catch(() => {
        toast.error("Error! Please try again");
      });

    console.log("done", obj);
    handleClick();
  };

  return (
    <Box>
      <Header
        title="CREATE Profile"
        subTitle="Here you can create profile (Admin - Crafter - User)"
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
        <TextField
          label="Password *"
          variant="filled"
          type="password"
          error={Boolean(errors.password)}
          helperText={
            Boolean(errors.password)
              ? "This field is required & min 8 character"
              : null
          }
          {...register("password", { required: true, minLength: 8 })}
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateField"]}>
            <DateField
              label="Basic date field"
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
            Create New User
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
