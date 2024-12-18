export type AtomsText = {
  text: string;
  isBlue?: boolean;
};

export type ChangeMoneyTextProps = {
  children: React.ReactNode;
};

export type TextInputConponentProps = {
  placeholder: string;
  value: string;
  disabled?: boolean;
  onChangeText?: (text: string) => void;
};

export type LabelProps = {
  text: string;
  isError?: boolean;
};

export type TextInputContainerProps = {
  label: string;
  money: string;
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  disabled?: boolean;
  error?: string;
  isError?: boolean;
};

export type ButtonDisabledSliceProps = {
  disabled: boolean;
};

export type ButtonComponentProps = {
  disabled: boolean;
  onPress: () => void;
};

export type ConfirmButtonProps = ButtonComponentProps;

export type CurrencySliceProps = {
  payment: string;
  send: string;
};

export type TemplateScreensProps = {
  children: React.ReactNode;
};

export type RootStackParamList = {
  OperationDetailsScreen: undefined;
  HomeScreen: undefined;
};

export type ButtonChevronLeftProps = {
  onPress: () => void;
};

export type ButtonChevronLeftContainerProps = ButtonChevronLeftProps;

export type DetailsComponentProps = {
  label: string;
  currency: string;
};
