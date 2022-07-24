export default function ValidatedBankDetails(values) {
  console.log(values);
  let errors = {};

  if (!values.pan || values.pan === "") {
    errors.pan = "pan required";
  } else if (!/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?/.test(values.pan)) {
    errors.pan = "pan address is invalid";
  }
  if (!values.aadhar || values.aadhar === "") {
    errors.aadhar = "Aadhar number is required";
  } else if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}?$/.test(values.aadhar)) {
    errors.aadhar = "Aadharnumber invalid";
  }

  if (!values.gst || values.gst === "") {
    errors.gst = "gst number is required";
  } else if (
    !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}?/.test(
      values.gst
    )
  ) {
    errors.gst = "gstnumber invalid";
  }
  if (!values.acc || values.acc === "") {
    errors.acc = "account number is required";
  } else if (!/^[0-9]{9,18}?/.test(values.acc)) {
    errors.acc = "account number invalid";
  }
  if (!values.acc2 || values.acc2 === "") {
    errors.acc2 = "account number is required";
  } else if (values.acc !== values.acc2) {
    errors.acc = "account number do not match";
  }
  if (!values.ifsc || values.ifsc === "") {
    errors.ifsc = "IFSC Code is required";
  } else if (!/^[A-Z]{4}[A-Z,0-9]{7}?/.test(values.ifsc)) {
    errors.ifsc = "IFSC Code invalid";
  }

  return errors;
}
