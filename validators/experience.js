const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = validateExperienceInput = data => {
  const errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job Title is required";
  }
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company name is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
