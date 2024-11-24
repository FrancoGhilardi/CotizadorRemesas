export type AtomsText = {
  text: string;
};

export type ChangeMoneyTextProps = {
  children: React.ReactNode;
};

export type TextInputConponentProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export type LabelProps = {
  text: string;
  isError?: boolean;
};

export type TextInputContainerProps = {
  label: string;
  money: string;
  error?: string;
  isError?: boolean;
  placeholder: string;
};
