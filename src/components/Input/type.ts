export interface IProps {
  label: string;
  required?: boolean;
  autoComplete: string;
  onChange?: (event: { target: any }) => void;
  name?: string;
}
