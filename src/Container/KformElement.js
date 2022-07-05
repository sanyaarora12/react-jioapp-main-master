export const inputFormElements = (register, errors) => [
  {
    name: "PanNumber",
    placeholder: "Enter pan number",
    label: "PanNumber",
    variant: "outlined",
    fullWidth: true,
    xs: 12,
    sm: 12,
    required: "Required field",
    pattern: {
      value: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?/i,
      message: "Invalid Pan Number",
    },
    errors: !!errors?.PanNumber,
    helperText: errors?.PanNumber ? errors.PanNumber.message : null,
  },
  {
    name: "panimg",
    type: "file",
    label: "Pan Card",
    variant: "outlined",
    fullWidth: true,
    xs: 12,
    sm: 12,
    required: "true",
  },
  {
    name: "AdhaarNumber",
    placeholder: "Enter Adhaar Number",
    label: "Adhaar Number",
    type: "number",
    variant: "outlined",
    fullWidth: true,
    xs: 12,
    sm: 12,
    required: "Required field",
    pattern: {
      value: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}?$/i,
      message: "Invalid Adhaar Number",
    },
    errors: !!errors?.AdhaarNumber,
    helperText: errors?.AdhaarNumber ? errors.AdhaarNumber.message : null,
  },
  {
    name: "adhaarimg",
    type: "file",
    label: "AdhaarFront",
    variant: "outlined",
    fullWidth: true,
    //hidden: true,
    xs: 12,
    sm: 6,
    required: "true",
  },
  {
    name: "adhaarimg2",
    type: "file",
    label: "AdhaarBack",
    variant: "outlined",
    fullWidth: true,
    //hidden: true,
    xs: 12,
    sm: 6,
    required: "true",
  },
  {
    name: "GSTNumber",
    placeholder: "Enter GSTNumber",
    label: "GSTNumber",
    variant: "outlined",
    fullWidth: true,
    xs: 12,
    sm: 12,
    required: "Required field",
    pattern: {
      value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}?/i,
      message: "Invalid Gst Number",
    },
    errors: !!errors?.GSTNumber,
    helperText: errors?.GSTNumber ? errors.GSTNumber.message : null,
  },
  {
    name: "AccNumber",
    type: "number",
    placeholder: "Enter AccNumber",
    label: "AccNumber",
    variant: "outlined",
    fullWidth: true,
    xs: 12,
    sm: 12,
    //inputRef: { required: true },
    pattern: {
      value: /^[0-9]{9,18}?/i,
      message: "Invalid Account Number",
    },
    errors: !!errors?.AccNumber,
    helperText: errors?.AccNumber ? errors.AccNumber.message : null,
  },

  {
    name: "IFSCCode",
    placeholder: "Enter IFSC Code",
    label: "IFSC Code",
    variant: "outlined",
    fullWidth: true,
    xs: 12,
    sm: 12,
    required: "Required field",
    pattern: {
      value: /^[A-Z]{4}[A-Z,0-9]{7}?/i,
      message: "Invalid IFSC Code",
    },
    errors: !!errors?.IFSCCode,
    helperText: errors?.IFSCCode ? errors.IFSCCode.message : null,
  },
  {
    name: "chqimg",
    type: "file",
    label: "Cancelled Cheque",
    variant: "outlined",
    fullWidth: true,
    //hidden: true,
    xs: 12,
    sm: 12,
    required: "true",
  },
  {
    name: "street",
    placeholder: "Enter street",
    label: "Street",
    variant: "outlined",
    fullWidth: true,
    xs: 12,
    sm: 6,
    required: "Required field",
  },
  {
    name: "city",
    placeholder: "Enter city name",
    label: "City",
    variant: "outlined",
    fullWidth: true,
    required: "Required field",
    xs: 12,
    sm: 6,
  },
  {
    name: "state",
    placeholder: "Enter state",
    label: "State",
    variant: "outlined",
    fullWidth: true,
    xs: 12,
    sm: 6,
    required: "Required field",
  },
  {
    name: "pincode",
    placeholder: "Enter pincode number",
    label: "Pincode",
    variant: "outlined",
    fullWidth: true,
    xs: 12,
    sm: 6,
    required: "Required field",
    pattern: {
      value: /^[1-9][0-9]{5}$/i,
      message: "Invalid Pin",
    },
  },
];
