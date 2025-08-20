export interface FormValues {
  dateOfBirth: string;
  confirmAge: boolean;
}

export interface AgePopupProps {
  open: boolean;
  onClose: () => void;
  onVerify: () => void;
}
