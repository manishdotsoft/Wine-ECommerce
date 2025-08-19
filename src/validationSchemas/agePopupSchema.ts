// src/validationSchemas/agePopupSchema.ts
import * as Yup from "yup";

export const agePopupSchema = Yup.object({
  dateOfBirth: Yup.string()
    .required("Date of birth is required")
    .matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/,
      "Please enter a valid date in MM/DD/YYYY format"
    )
    .test("age-validation", "You must be 21 years or older to access this website", (value) => {
      if (!value) return false;

      const [month, day, year] = value.split("/").map(Number);
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age >= 21;
    }),
  confirmAge: Yup.boolean()
    .oneOf([true], "You must confirm that you are of legal drinking age")
    .required("You must confirm that you are of legal drinking age"),
});
