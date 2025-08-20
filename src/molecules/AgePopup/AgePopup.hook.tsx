import { useMemo } from "react";
import { agePopupSchema } from "../../validationSchemas/agePopupSchema";
import { AGE_POPUP_INITIAL_VALUES } from "../../constant/formInitialValues";

export interface FormValues {
  dateOfBirth: string;
  confirmAge: boolean;
}

export const useAgePopup = (onVerify: () => void) => {
  const initialValues: FormValues = AGE_POPUP_INITIAL_VALUES;
  const validationSchema = useMemo(() => agePopupSchema, []);
  const handleSubmit = (values: FormValues) => {
    onVerify();
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit,
  };
};
