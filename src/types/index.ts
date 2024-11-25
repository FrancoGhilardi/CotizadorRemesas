export type AtomsText = {
  text: string;
};

export type ChangeMoneyTextProps = {
  children: React.ReactNode;
};

export type TextInputConponentProps = {
  placeholder: string;
  value: string;
  disabled?: boolean;
  onChangeText: (text: string) => void;
};

export type LabelProps = {
  text: string;
  isError?: boolean;
};

export type TextInputContainerProps = {
  label: string;
  money: string;
  placeholder: string;
  disabled?: boolean;
  error?: string;
  isError?: boolean;
};
