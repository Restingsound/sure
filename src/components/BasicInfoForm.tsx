import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createQuote } from "../reducers/quoteReducer";

const BasicInfoForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressRegion, setAddressRegion] = useState("");
  const [addressPostal, setAddressPostal] = useState("");
  const [touched, setTouched] = useState({
    first_name: false,
    last_name: false,
    address_line_1: false,
    address_line_2: false,
    address_city: false,
    address_region: false,
    address_postal: false,
  });

  const dispatch = useDispatch();
  const addQuote = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (
      touched["first_name"] &&
      touched["last_name"] &&
      touched["address_line_1"] &&
      touched["address_city"] &&
      touched["address_region"] &&
      touched["address_postal"] &&
      lastName &&
      firstName &&
      addressLine1 &&
      addressCity &&
      addressRegion &&
      addressPostal &&
      Number.isInteger(parseInt(addressPostal, 10))
    ) {
      const content = {
        first_name: firstName,
        last_name: lastName,
        address: {
          line_1: addressLine1,
          line_2: addressLine2,
          city: addressCity,
          region: addressRegion,
          postal: addressPostal,
        },
      };
      dispatch(createQuote(content));
    }
  };

  const handleTextFieldChange = (event: any) => {
    if (event.target.id === "first_name") {
      setFirstName(event.target.value);
      setTouched({ ...touched, first_name: true });
    }
    if (event.target.id === "last_name") {
      setLastName(event.target.value);
      setTouched({ ...touched, last_name: true });
    }
    if (event.target.id === "address_line_1") {
      setAddressLine1(event.target.value);
      setTouched({ ...touched, address_line_1: true });
    }
    if (event.target.id === "address_line_2") {
      setAddressLine2(event.target.value);
      setTouched({ ...touched, address_line_2: true });
    }
    if (event.target.id === "address_city") {
      setAddressCity(event.target.value);
      setTouched({ ...touched, address_city: true });
    }
    if (event.target.id === "address_region") {
      setAddressRegion(event.target.value);
      setTouched({ ...touched, address_region: true });
    }
    if (event.target.id === "address_postal") {
      setAddressPostal(event.target.value);
      setTouched({ ...touched, address_postal: true });
    }
  };

  const hasError = (fieldName: string) => {
    if (fieldName === "first_name") return touched["first_name"] && !firstName;
    if (fieldName === "last_name") return touched["last_name"] && !lastName;
    if (fieldName === "address_line_1")
      return touched["address_line_1"] && !addressLine1;
    if (fieldName === "address_line_2")
      return touched["address_line_2"] && !addressLine2;
    if (fieldName === "address_city")
      return touched["address_city"] && !addressCity;
    if (fieldName === "address_region")
      return touched["address_region"] && !addressRegion;
    if (fieldName === "address_postal")
      return (
        touched["address_postal"] &&
        !Number.isInteger(parseInt(addressPostal, 10))
      );
  };

  return (
    <div>
      <h2>Rating Information</h2>
      <p>
        Sure can provide you a quote in seconds just fill out the following
        information to get started.
      </p>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={addQuote}
      >
        <div>
          <div>
            <TextField
              id="first_name"
              label="First Name"
              variant="outlined"
              required
              size="small"
              error={hasError("first_name")}
              onChange={handleTextFieldChange}
              helperText={hasError("first_name") && "First Name is Required"}
            />
            <TextField
              id="last_name"
              label="Last Name"
              variant="outlined"
              required
              size="small"
              error={hasError("last_name")}
              onChange={handleTextFieldChange}
              helperText={hasError("last_name") && "Last Name is Required"}
            />
          </div>
          <div>
            <TextField
              id="address_line_1"
              label="Address Line 1"
              variant="outlined"
              required
              size="small"
              error={hasError("address_line_1")}
              onChange={handleTextFieldChange}
              helperText={hasError("address_line_1") && "Address is Required"}
            />
            <TextField
              id="address_line_2"
              label="Address Line 2"
              variant="outlined"
              size="small"
              onChange={handleTextFieldChange}
            />
          </div>
          <div>
            <TextField
              id="address_city"
              label="City"
              variant="outlined"
              required
              size="small"
              error={hasError("address_city")}
              onChange={handleTextFieldChange}
              helperText={hasError("address_city") && "City is Required"}
            />
            <TextField
              id="address_region"
              label="State"
              variant="outlined"
              required
              size="small"
              error={hasError("address_region")}
              onChange={handleTextFieldChange}
              helperText={hasError("address_region") && "State is Required"}
            />
          </div>
          <div>
            <TextField
              id="address_postal"
              label="Zip Code"
              variant="outlined"
              required
              size="small"
              error={hasError("address_postal")}
              onChange={handleTextFieldChange}
              helperText={
                hasError("address_postal") &&
                "Zip Code is Required and Must be a Number"
              }
            />
          </div>
        </div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default BasicInfoForm;
