import React from "react";
import { Formik, Form, Field } from "formik";
import { useAgePopup } from "./AgePopup.hook.tsx";
import * as Styled from "./AgePopup.style.tsx";
import { formatDate } from "../../utils/dateFormate.ts";
import { logo } from "../../assets/index.tsx";

export interface AgePopupProps {
  open: boolean;
  onClose: () => void;
  onVerify: () => void;
}

const AgePopup = ({ open, onClose, onVerify }: AgePopupProps) => {
  const { validationSchema, initialValues, handleSubmit } = useAgePopup(onVerify);

  return (
    <Styled.StyledDialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Styled.StyledDialogContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, setFieldValue }) => (
            <Form>
              <Styled.Container>
                <Styled.LogoSection>
                  <Styled.LogoImage alt="logo image" src={logo} />
                </Styled.LogoSection>

                <Styled.Title>Enter Your Date of Birth</Styled.Title>

                <Styled.Subtitle variant="body1">
                  You must be 21 years or older to access this website.
                </Styled.Subtitle>

                <Styled.InputSection>
                  <Styled.InputLabel>
                    Enter Date of Birth <span>*</span>
                  </Styled.InputLabel>

                  <Field name="dateOfBirth">
                    {({ field, form }: any) => (
                      <Styled.StyledTextField
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          const formatted = formatDate(e.target.value);
                          form.setFieldValue("dateOfBirth", formatted);
                        }}
                        placeholder="MM/DD/YYYY"
                        variant="outlined"
                        fullWidth
                        error={form.touched.dateOfBirth && !!form.errors.dateOfBirth}
                      />
                    )}
                  </Field>

                  {touched.dateOfBirth && errors.dateOfBirth && (
                    <Styled.ErrorText error>{errors.dateOfBirth}</Styled.ErrorText>
                  )}
                </Styled.InputSection>

                <Styled.CheckBoxSection>
                  <Field name="confirmAge">
                    {({ field }: any) => (
                      <Styled.StyledFormControlLabel
                        control={
                          <Styled.StyledCheckbox
                            {...field}
                            checked={values.confirmAge}
                            onChange={(e) => setFieldValue("confirmAge", e.target.checked)}
                          />
                        }
                        label="I confirm that I am of legal drinking age."
                      />
                    )}
                  </Field>

                  {touched.confirmAge && errors.confirmAge && (
                    <Styled.ErrorText error>{errors.confirmAge}</Styled.ErrorText>
                  )}
                </Styled.CheckBoxSection>

                <Styled.ButtonsSection>
                  <Styled.VerifyButton type="submit">Verify Age</Styled.VerifyButton>

                  <Styled.ExitButton variant="outlined" onClick={onClose}>
                    Exit
                  </Styled.ExitButton>
                </Styled.ButtonsSection>

                <Styled.Disclaimer>
                  By continuing, you certify that you are of legal drinking age in your location.
                </Styled.Disclaimer>
              </Styled.Container>
            </Form>
          )}
        </Formik>
      </Styled.StyledDialogContent>
    </Styled.StyledDialog>
  );
};

export default AgePopup;
